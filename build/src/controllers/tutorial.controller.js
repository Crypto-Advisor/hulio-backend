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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTutorial = exports.updateTutorial = exports.getTutorial = exports.getTutorials = exports.createTutorial = void 0;
const db_1 = __importDefault(require("../../db"));
const createTutorial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image = null, description = null, tutorial_steps = {}, reward = 0, currency = 'SOL' } = req.body;
        let result = yield db_1.default.query('INSERT INTO tutorial (name, image, description, tutorial_steps, reward, currency) VALUES ($1, $2, $3, $4, $5, $6)', [name, image, description, tutorial_steps, reward, currency]);
        res.status(201).json({
            status: 'success',
            result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createTutorial = createTutorial;
const getTutorials = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield db_1.default.query('SELECT * FROM tutorial');
        res.status(200).json({
            status: 'success',
            result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getTutorials = getTutorials;
const getTutorial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tutorial_id } = req.params;
        let result = yield db_1.default.query('SELECT * FROM tutorial WHERE tutorial_id=$1', [tutorial_id]);
        res.status(200).json({
            status: 'success',
            result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getTutorial = getTutorial;
const updateTutorial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tutorial_id, name, image, description, tutorial_steps, reward, currency } = req.body;
        let result = yield db_1.default.query('UPDATE tutorial SET name=$1, image=$2, description=$3, tutorial_steps=$4, reward=$5, currency=$6 WHERE tutorial_id=$7', [name, image, description, tutorial_steps, reward, currency, tutorial_id]);
        res.status(200).json({
            status: 'success',
            result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateTutorial = updateTutorial;
const deleteTutorial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield db_1.default.query('DELETE FROM tutorial WHERE tutorial_id=$1', [req.params.tutorial_id]);
        res.status(200).json({
            status: 'success',
            result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteTutorial = deleteTutorial;
