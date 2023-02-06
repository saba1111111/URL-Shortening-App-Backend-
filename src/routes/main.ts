import { Router } from "express";
import {encodeFunction,decodeFunction,fetchAllUrls} from "../controllers/main";
import {body} from "express-validator"

const router = Router();

router.post("/encode",body("url").isURL(),encodeFunction);
router.post("/decode",body("link").isURL(),decodeFunction);
router.get("/allUrls",fetchAllUrls);

export default router;