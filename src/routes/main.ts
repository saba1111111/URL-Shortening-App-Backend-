import { Router } from "express";
import {encodeFunction} from "../controllers/main";
import {body} from "express-validator"

const router = Router();

router.post("/encode",body("url").isURL(),encodeFunction);


export default router;