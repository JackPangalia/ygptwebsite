import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt, threadId } = req.body;

    console.log(prompt);
    // assistant id variable
    const assistantId = "asst_WDSPX49YUUJxDG1677RoRQMo";

    // retrieve the assistant
    const assistant = await openai.beta.assistants.retrieve(assistantId);

    // use existing threadId or create a new thread
    let thread;
    if (threadId) {
      thread = { id: threadId };
    } else {
      thread = await openai.beta.threads.create();
    }

    // create a message for the assistant
    const message = await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: prompt,
    });

    // create a run for the assistant
    let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: assistant.id,
    });

    // list the most recent run and return send it as a response
    if (run.status === "completed") {
      const messages = await openai.beta.threads.messages.list(run.thread_id);
      const responses = messages.data.map(
        (message) => message.content[0].text.value
      );
      const aires = responses[0];
      res.status(200).json({ payload: aires, threadId: thread.id });
    } else {
      res.status(500).json({ payload: "error" });
    }
  }
}