import { Request, Response } from "express";
import { ExampleModel, ExampleSchemas } from "@models/example";

export async function getAll(_: Request, res: Response): Promise<void> {
    try {
        const data = await ExampleModel.getAll();

        res.status(200).json(data);
    } catch (err) {
        res.status(404).json(err);
    }
}

export async function getById(req: Request, res: Response): Promise<void> {
    try {
        const id = ExampleSchemas.idSchema.parse(req.params.id);

        const example = await ExampleModel.getById(id);

        if (example === undefined) {
            throw new Error("example doesn't exist");
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(404).json(err);
    }
}

export async function create(req: Request, res: Response): Promise<void> {
    try {
        const example = ExampleSchemas.createExampleSchema.parse(req.body);

        const newExample = await ExampleModel.create(example);

        res.status(201).json(newExample);
    } catch (err) {
        res.status(409).json(err);
    }
}

export async function update(req: Request, res: Response): Promise<void> {
    try {
        const id = ExampleSchemas.idSchema.parse(req.params.id);
        const example = ExampleSchemas.updateExampleSchema.parse(req.body);

        const updatedExample = await ExampleModel.update(id, example);

        res.status(200).json(updatedExample);
    } catch (err) {
        res.status(409).json(err);
    }
}

export async function remove(req: Request, res: Response): Promise<void> {
    try {
        const id = ExampleSchemas.idSchema.parse(req.params.id);

        await ExampleModel.remove(id);

        res.sendStatus(204);
    } catch (err) {
        res.status(409).json(err);
    }
}
