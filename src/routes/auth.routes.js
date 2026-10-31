import {Router} from 'express';
import * as authcontroller from "../controllers/auth.controller.js"
const authRouter = Router();


/**
 * POST /api/auth/register
 */

authRouter.post("/register", authcontroller.register)

/**
 * GET /api/auth/get-me
 */
authRouter.get("/get-me",authcontroller.getMe)

/**
 * GET /api/auth/refresh-token
 */
authRouter.get("/refresh-token", authcontroller.refreshToken)

export default authRouter;