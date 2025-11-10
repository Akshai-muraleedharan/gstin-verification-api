"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const gstinNumberController_1 = require("../controller/gstinNumberController");
exports.router = express_1.default.Router();
/**
 * @swagger
 * /gstin:
 *    post:
 *     summary: GSTIN number verification
 *     tags:
 *       -  verify GSTIN number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  gstinNumber:
 *                    type: string
 *                    example: 06AAFCI1307N1ZM
 *
 *     responses:
 *        200:
 *          description: verify gstin number
 *
 */
exports.router.post("/gstin", gstinNumberController_1.getGSTINData);
