import { Router } from "express";
import * as controller from "../controllers/itemsControllers"

const router = Router();
//router käsitleb navigatsiooni erinevate vaadete vahel

router.get("/", controller.getItems);
router.post("/", controller.createItem);
router.delete("/:id", controller.removeItem);

export default router;