import express from 'express';
import cors from 'cors';
import generate from './generate.js';

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8800;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/generate", async(req, res) =>{
    const query = req.body.query;
    try{
        const generatedQuery = await generate(query);
        res.json({response: generatedQuery});
    }catch(err){
        console.log(err);
        res.status(500).send("Something went wrong!");
    }

})

app.listen(port, () => {
    console.log("listening");
});
