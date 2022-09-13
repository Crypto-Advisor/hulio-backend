import { Request, Response, NextFunction } from "express";
import pool from '../../db';

export const createTutorial = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        const {url, name, category, image=null, description=null, tutorial_steps={}, reward=0, currency='SOL'} = req.body;
        let result = await pool.query('INSERT INTO tutorial (url, name, category, image, description, tutorial_steps, reward, currency) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [url, name, category, image, description, tutorial_steps, reward, currency]);
        res.status(201).json({
            status: 'success',
            result
        });
    } catch(err:any){
        console.log(err)
        next(err);
    }
}

export const getTutorials = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        let result = await pool.query('SELECT * FROM tutorial')
        res.status(200).json({
            status: 'success',
            result
        });
    } catch(err:any){
        next(err);
    }
}


export const getTutorial = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        let result = await pool.query('SELECT * FROM tutorial WHERE url LIKE $1', ['%' + req.params.url + '%'])
        res.status(200).json({
            status: 'success',
            result
        });
    } catch(err:any){
        next(err);
    }
}

export const updateTutorial = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        const {url, name, category, image, description, tutorial_steps, reward, currency} = req.body;
        let result = await pool.query('UPDATE tutorial SET name=$1, category=$2, image=$3, description=$4, tutorial_steps=$5, reward=$6, currency=$7 WHERE url=$7', [name, category, image, description, tutorial_steps, reward, currency, url]);
        res.status(200).json({
            status: 'success',
            result
        });
    } catch(err:any){
        next(err);
    }
}

export const deleteTutorial = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        let result = await pool.query('DELETE FROM tutorial WHERE url LIKE $1', ['%' + req.params.url + '%']);
        res.status(200).json({
            status: 'success',
            result
        });
    } catch(err:any){
        next(err);
    }
}