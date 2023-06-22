import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = process.env.PORT || 8800;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log("listening");
});
