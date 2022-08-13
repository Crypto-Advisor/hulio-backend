"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const password = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.headers['authorization']) {
        const bearer = req.headers['authorization'];
        const token = bearer.split(' ')[1];
        if (token === process.env.PASSWORD) {
            next();
        }
        else {
            res.status(401).json({ status: 'wrong authorization' });
        }
    }
    else {
        res.status(401).json({ status: 'wrong authorization' });
    }
});
exports.default = password;
