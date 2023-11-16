import { Router } from "express";
import * as controller from "@controllers/example";

const path = "/example";
const router = Router();

router.get("/", controller.get);

export const example = [path, router] as const;
