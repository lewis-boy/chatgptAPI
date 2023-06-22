import openai from './server.js';

const generate = async(query) => {

    const davinci = async(query) => {
        const res = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Convert the following natural language description into a SQL query: \n\n${query}.`,
            max_tokens: 100,
            temperature: 0
        });
        return res.data.choices[0].text;
    };

    const chatgptApi = async(query) => {
        const messages = [
            {role: "system", content: `You are a translator from plain English to SQL.`},
            {role: "user", content: `Convert the following natural language description into a SQL query: \n\nshow all elements from the table users.`,},
            {role: "assistant", content: `SELECT * FROM users;`},
            {role: "user", content: `Convert the following natural language description into a SQL query: \n\n${query}.`}
        ];

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,

        });
        
        return response.data.choices[0].message.content;
    }


    return await chatgptApi(query);

}

export default generate;