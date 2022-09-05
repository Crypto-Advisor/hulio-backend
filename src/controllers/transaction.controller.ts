import { Request, Response, NextFunction } from "express";
import * as web3 from '@solana/web3.js';
import bs58 from 'bs58';

require('dotenv').config();

let connection:any = null;

if(process.env.ENDPOINT){
    let endpoint = process.env.ENDPOINT
    connection = new web3.Connection(endpoint);
}

export const sendReward = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
  try{
    const {address} = req.params;
    const privateKey = process.env.KEY;
    if(privateKey){

      const decoded = bs58.decode(privateKey)
      let from = web3.Keypair.fromSecretKey(decoded)
      let to = new web3.PublicKey(address)

      let transaction = new web3.Transaction().add(
        web3.SystemProgram.transfer({
          fromPubkey: from.publicKey,
          toPubkey: to,
          lamports: web3.LAMPORTS_PER_SOL / 100, // number of SOL to send
        }),
      );

      let signature = await web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [from]
      );
      console.log("SIGNATURE", signature);
      console.log("SUCCESS");
      res.status(200).json({
        status: 'success transaction sent',
        signature
      });

    } 
  } catch(err){ 
    next(err)
  }
} 
