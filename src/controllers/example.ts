import { Request, Response } from "express";

export function get(req: Request, res: Response) {
    res.send("example route");
}
