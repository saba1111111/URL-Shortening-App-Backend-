import { Router } from "express";
<<<<<<< HEAD
import {encodeFunction,decodeFunction,fetchAllUrls} from "../controllers/main";
import {body} from "express-validator"
=======
import {body} from "express-validator"
import {encodeFunction,decodeFunction,fetchAllUrls} from "../controllers/main";
>>>>>>> d4d9c0d60bc0910dce221bcf84482e34f109a7fb

const router = Router();

router.post("/encode",body("url").isURL(),encodeFunction);
router.post("/decode",body("link").isURL(),decodeFunction);
router.get("/allUrls",fetchAllUrls);

export default router;