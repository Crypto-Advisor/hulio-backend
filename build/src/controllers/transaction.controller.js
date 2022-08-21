"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReward = void 0;
const web3 = __importStar(require("@solana/web3.js"));
const bs58_1 = __importDefault(require("bs58"));
require('dotenv').config();
let connection = null;
if (process.env.ENDPOINT) {
    let endpoint = process.env.ENDPOINT;
    connection = new web3.Connection(endpoint);
}
const sendReward = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.params;
        const privateKey = process.env.KEY;
        if (privateKey) {
            const decoded = bs58_1.default.decode(privateKey);
            let from = web3.Keypair.fromSecretKey(decoded);
            let to = new web3.PublicKey(address);
            let transaction = new web3.Transaction().add(web3.SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: to,
                lamports: web3.LAMPORTS_PER_SOL / 100, // number of SOL to send
            }));
            let signature = yield web3.sendAndConfirmTransaction(connection, transaction, [from]);
            console.log("SIGNATURE", signature);
            console.log("SUCCESS");
            res.status(200).json({
                status: 'success transaction sent',
                signature
            });
        }
    }
    catch (err) {
        try {
            const { address } = req.params;
            const privateKey = process.env.KEY;
            if (privateKey) {
                const decoded = bs58_1.default.decode(privateKey);
                let from = web3.Keypair.fromSecretKey(decoded);
                let to = new web3.PublicKey(address);
                let transaction = new web3.Transaction().add(web3.SystemProgram.transfer({
                    fromPubkey: from.publicKey,
                    toPubkey: to,
                    lamports: web3.LAMPORTS_PER_SOL / 100, // number of SOL to send
                }));
                let signature = yield web3.sendAndConfirmTransaction(connection, transaction, [from]);
                console.log("SIGNATURE", signature);
                console.log("SUCCESS");
                res.status(200).json({
                    status: 'success transaction sent',
                    signature
                });
            }
        }
        catch (err) {
            next(err);
        }
    }
});
exports.sendReward = sendReward;
