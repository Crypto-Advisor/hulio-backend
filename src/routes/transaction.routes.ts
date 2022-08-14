import express from 'express';
import password from '../utils/password';

import { sendReward } from '../controllers/transaction.controller';


const router = express.Router();

router.post('/send/:address', password, sendReward);

export default router;
