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
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        function createWebsiteTable() {
            return knex.schema.createTable('website', (table) => {
                table.string('url', 100).primary();
                table.string('tx_hash', 256).notNullable();
                table.boolean('verified').notNullable();
                table.timestamp('date_created').notNullable().defaultTo(knex.fn.now());
            });
        }
        function createTutorialTable() {
            return knex.schema.createTable('tutorial', (table) => {
                table.string('url', 100).primary();
                table.string('name', 100).notNullable();
                table.string('image', 1000).nullable();
                table.text('description').nullable();
                table.json('tutorial_steps').defaultTo('{}').notNullable();
                table.decimal('reward', 12, 12).notNullable().defaultTo(0);
                table.string('currency', 100).notNullable().defaultTo('SOL');
            });
        }
        return createWebsiteTable()
            .then(createTutorialTable);
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        function dropTables() {
            return __awaiter(this, void 0, void 0, function* () {
                function dropWebsite() {
                    return knex.schema.dropTable('website');
                }
                return dropWebsite()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    return knex.schema.dropTable('tutorial');
                }));
            });
        }
        return dropTables();
    });
}
exports.down = down;
