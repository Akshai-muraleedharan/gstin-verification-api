import Joi from "joi";
import { GSTIN } from "../interface/interface";



export const gstinValidation = Joi.object<GSTIN>({
    gstinNumber: Joi.string().required().pattern(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/).messages({
        "string.pattern.base": "Enter a valid PAN (e.g., 27ABCDE1234F1Z5)",
        "string.empty": "PAN number is required"
    })
})