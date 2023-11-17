import { Router } from "express";
import * as controller from "@controllers/example";

const path = "/example";
const router = Router();

router.route("/").get(controller.getAll).post(controller.create);

router
    .route("/:id")
    .get(controller.getById)
    .patch(controller.update)
    .delete(controller.remove);

export const example = [path, router] as const;
