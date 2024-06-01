import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import OpenAI from "openai";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const openai = new OpenAI({
  apiKey: "",
});

app.use(cors());

io.on("connection", (socket) => {
  socket.on("send_prompt", (data) => {
    // get prompt from frontend
    const prompt = data.prompt;

    const generateReponse = async () => {
      // assistant id variable
      const assistantId = "asst_WDSPX49YUUJxDG1677RoRQMo";

      // retrieve the assistant
      const assistant = await openai.beta.assistants.retrieve(assistantId);
      const thread = await openai.beta.threads.create();

      // create a message for the assistant
      const message = await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: "what do you do",
      });

      const run = openai.beta.threads.runs
        .stream(thread.id, {
          assistant_id: assistant.id,
        })
        .on("textCreated", (text) => socket.emit('textCreated', text))
        .on("textDelta", (textDelta, snapshot) =>
          socket.emit('textDelta', { textDelta, snapshot})
        )
        .on("toolCallCreated", (toolCall) =>
          socket.emit('toolCallCreated', toolCall)
        )
        .on("toolCallDelta", (toolCallDelta, snapshot) => {
          if (toolCallDelta.type === "code_interpreter") {
            if (toolCallDelta.code_interpreter.input) {
              socket.emit('codeInterpreterInput', toolCallDelta.code_interpreter.input)
            }
            if (toolCallDelta.code_interpreter.outputs) {
              // process.stdout.write("\noutput >\n");
              toolCallDelta.code_interpreter.outputs.forEach((output) => {
                if (output.type === "logs") {
                  socket.emit('codeInterpreterLogs', output.logs)
                }
              });
            }
          }
        });

      
      socket.emit("send_message", { payload: 'hello' });
    };

    generateReponse();
  });
});

server.listen(3001, () => {
  console.log("Server is running");
});
