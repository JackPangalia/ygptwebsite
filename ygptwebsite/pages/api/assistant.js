import OpenAI from "openai";
import { Server } from 'ws';

const openai = new OpenAI({
  apiKey: "sk-proj-UMaIOOAaOrwqZE9ywxZVT3BlbkFJDrF4T4LLihprPFXnvP1U",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const prompt = req.body;

    console.log(prompt);
    // assistant id varible
    const assistantId = "asst_WDSPX49YUUJxDG1677RoRQMo";

    // retrieve the assistant
    const assistant = await openai.beta.assistants.retrieve(assistantId);

    // create a new thread for the assistant
    const thread = await openai.beta.threads.create();

    // create a message for the assistatn
    const message = await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: prompt,
    });

    // create a run for the assistant
    let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: assistant.id,
    });

    // list the most recent run and return send it as a resposne
    if (run.status === "completed") {
      const messages = await openai.beta.threads.messages.list(run.thread_id);
      const responses = messages.data.map(
        (message) => message.content[0].text.value
      );
      const aires = responses[0];
      console.log(aires)
      res.status(200).json({ payload: aires });
    } else {
      res.status(500).json({ payload: "error" });
    }

    // res.status(200).json({ payload: "hello there" });
  }
}
