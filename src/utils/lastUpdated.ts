import { Request, Response, NextFunction } from "express";

export let last_updated = new Date();

export const lastUpdated = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    last_updated = new Date();
    next()
}