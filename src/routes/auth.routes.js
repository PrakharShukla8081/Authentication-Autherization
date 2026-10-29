import {Router} from 'express';
import * as authcontroller from "../controllers/auth.controller.js"
const authRouter = Router();


/**
 * POST /api/auth/register
 */

authRouter.post("/register", authcontroller.register)


export default authRouter;