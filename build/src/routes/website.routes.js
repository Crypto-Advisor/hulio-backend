"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const password_1 = __importDefault(require("../utils/password"));
const website_controller_1 = require("../controllers/website.controller");
const router = express_1.default.Router();
/**
  * Get all website data
*/
router.get('/get_websites', password_1.default, website_controller_1.getWebsites);
/**
  * Get website data
  * @param  {string}  url  the url of the website
*/
router.get('/get_website/:url', password_1.default, website_controller_1.getWebsite);
/**
  * Add website data
  * @body {string url, string tx_hash}
*/
router.post('/create_website', password_1.default, website_controller_1.createWebsite);
/**
  * Update website tx_hash
  * @body {string url, string tx_hash}
*/
router.put('/update_website', password_1.default, website_controller_1.updateWebsite);
/**
  * Delete website data
  * @param  {string}  url  the url of the website
*/
router.delete('/delete_website/:url', password_1.default, website_controller_1.deleteWebsite);
exports.default = router;
