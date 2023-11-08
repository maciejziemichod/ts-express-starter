import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("hello world 1");
});

app.listen(3000, () => {
    console.log("example app is listening");
});
