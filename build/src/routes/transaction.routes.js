"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const password_1 = __importDefault(require("../utils/password"));
const transaction_controller_1 = require("../controllers/transaction.controller");
const router = express_1.default.Router();
router.post('/send/:address', password_1.default, transaction_controller_1.sendReward);
exports.default = router;
