"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gstinValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.gstinValidation = joi_1.default.object({
    gstinNumber: joi_1.default.string().required().pattern(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/).messages({
        "string.pattern.base": "Enter a valid PAN (e.g., 27ABCDE1234F1Z5)",
        "string.empty": "PAN number is required"
    })
});
