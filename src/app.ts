import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("hello world 1");
});

app.listen(PORT, () => {
    console.log("example app is listening");
});
