"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tutorial_controller_1 = require("../controllers/tutorial.controller");
//remember to add passwords
const router = express_1.default.Router();
router.post('/create', tutorial_controller_1.createTutorial);
router.get('/get', tutorial_controller_1.getTutorial);
router.get('/get-list', tutorial_controller_1.getTutorials);
router.put('/update', tutorial_controller_1.updateTutorial);
router.delete('/delete', tutorial_controller_1.deleteTutorial);
exports.default = router;
