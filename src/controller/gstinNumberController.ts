import type { Request, Response } from "express";
import { gstinValidation } from "../utils/joiValidation";
import axios from "axios"

export const getGSTINData = async (req: Request<{ gstin: string }>, res: Response<{ success: boolean, message: string, data?: any }>) => {
    try {
        const { error, value } = gstinValidation.validate(req.body)

        if (error) {
            res.status(400).json({ success: false, message: error.details[0].message })
            return;
        }

        const gstinNumberUpperCase = value.gstinNumber?.toUpperCase().trim();

        const data = JSON.stringify({
            "gstin": gstinNumberUpperCase
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: process.env.INVINCIBLE_OCEAN_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'clientId': `${process.env.INVINCIBLE_CLIENT_ID}`,
                'secretKey': `${process.env.INVINCIBLE_SECRET_ID}`
            },
            data: data
        };;

        const axiosResponse = await axios(config)

        res.status(200).json({ success: true, message: "Data fetched successfully", data: axiosResponse?.data })

    } catch (error: any) {
        res.status(error?.response?.data?.message.code || 500).json({ success: false, message: error?.response?.data?.message || "Internal server error", data: error?.response?.data || null })
        return
    }
} 