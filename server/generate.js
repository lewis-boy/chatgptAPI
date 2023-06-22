import openai from './server.js';

const generate = async(query) => {
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert the following natural language description into a SQL query: \n\n${query}.`,
        max_tokens: 100,
        temperature: 0
    });
    return res.data.choices[0].text;
}

export default generate;