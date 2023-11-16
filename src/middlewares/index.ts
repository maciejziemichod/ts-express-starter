import express from "express";
import { example } from "@middlewares/example";

export const middlewares = [
    express.json(),
    // express.urlencoded(),
    example,
] as const;
