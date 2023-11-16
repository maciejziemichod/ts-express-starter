import express from "express";
import { middlewares } from "@middlewares/index";
import { routes } from "@routes/index";

const app = express();

app.use(...middlewares);

routes.forEach(([path, route]) => {
    app.use(path, route);
});

export default app;
