import express from "express";
import { middlewares } from "@middlewares/index";

const app = express();

app.use(...middlewares);

app.get("/", (req, res) => {
    res.send("hello world");
});

export default app;
