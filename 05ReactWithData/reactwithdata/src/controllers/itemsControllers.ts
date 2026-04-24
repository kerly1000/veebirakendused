import type { Request, Response} from "express"
import * as service from "../services/itemService.ts"

export const getItems = async (_: Request, res: Response) => {
    const items = await service.getItems();
    res.json(items);
}

export const createItem = async (req: Request, res: Response) => {
    await service.addItem(req.body.name);
    res.sendStatus(201); //201 = created
}

export const removeItem = async (reg: Request, res: Response) => {
    await service.deleteItem(Number(reg.params.id));
    res.sendStatus(200); //200 = accepted
}
