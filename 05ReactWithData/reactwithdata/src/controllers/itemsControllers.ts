import type { Request, Response} from "express"
import * as service from "../services/itemService"

export const getItems = async (_: Request, res: Response) => {
    const items = await service.getItems();
    res.json(items);
}

export const createItem = async (reg: Request, res: Response) => {
    await service.addItem(req.body.name);
    res.sendStatus(201);
}

export const removeItem = async (reg: Request, res: Response) => {
    await service.deleteItem(Number(reg.params.id));
    res.sendStatus(200);
}
