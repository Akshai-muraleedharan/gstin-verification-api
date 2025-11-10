import express from "express"
import type { Router } from "express"
import { getGSTINData } from "../controller/gstinNumberController";



export const router: Router = express.Router();

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

router.post("/gstin", getGSTINData)
