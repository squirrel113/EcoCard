const { Configuration, OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          "Can you give a score(out of 10) for how eco-friendly almond milk, dairy-free cheese, and Britannia Bourbon are(numbers only please!)?",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(chatCompletion.choices[0]);
}

main();
