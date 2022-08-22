import { Request, Response, NextFunction } from "express";
import pool from '../../db';

export const createTutorial = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        const {name, image=null, description=null, tutorial_steps={}, reward=0, currency='SOL'} = req.body;
        let result = await pool.query('INSERT INTO tutorial (name, image, description, tutorial_steps, reward, currency) VALUES ($1, $2, $3, $4, $5, $6)', [name, image, description, tutorial_steps, reward, currency]);
        res.status(201).json({
            status: 'success',
            result
        });
    } catch(err:any){
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
        const { tutorial_id } = req.params;
        let result = await pool.query('SELECT * FROM tutorial WHERE tutorial_id=$1', [tutorial_id])
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
        const {tutorial_id, name, image, description, tutorial_steps, reward, currency} = req.body;
        let result = await pool.query('UPDATE tutorial SET name=$1, image=$2, description=$3, tutorial_steps=$4, reward=$5, currency=$6 WHERE tutorial_id=$7', [name, image, description, tutorial_steps, reward, currency, tutorial_id]);
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
        let result = await pool.query('DELETE FROM tutorial WHERE tutorial_id=$1', [req.params.tutorial_id]);
        res.status(200).json({
            status: 'success',
            result
        });
    } catch(err:any){
        next(err);
    }
}