import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';

dotenv.config();

const openaiKey = process.env.OPENAI_KEY;

if(!openaiKey) {
    console.log("no such key found");
    process.exit(1);
}

const configuration = new Configuration({
    apiKey: openaiKey,
});

const openai = new OpenAIApi(configuration);

export default openai;