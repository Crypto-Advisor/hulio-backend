require('dotenv').config();
import { Request, Response, NextFunction } from "express";

const password = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    if(req.headers['authorization']){
        const bearer:string = req.headers['authorization'];
        const token = bearer.split(' ')[1];
        if(token === process.env.PASSWORD){
            next()
        }
        else{
            res.status(401).json({status: 'wrong authorization'})
        }
    } else{
        res.status(401).json({status: 'wrong authorization'})
    }
}


export default password
