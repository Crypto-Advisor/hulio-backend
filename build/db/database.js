"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = process.env.NODE_ENV || 'development';
const knexfile = require('../knexfile');
const knex = require('knex')(knexfile[env]);
exports.default = knex;
