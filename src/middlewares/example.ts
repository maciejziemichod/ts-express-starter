import { NextFunction, Request, Response } from "express";

export function example(_: Request, __: Response, next: NextFunction) {
    console.log("hello from middleware");
    next();
}
