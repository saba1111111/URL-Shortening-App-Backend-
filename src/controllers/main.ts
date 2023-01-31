import { RequestHandler } from "express";
import {validationResult} from "express-validator";
import { BitlyClient,isBitlyErrResponse } from 'bitly';
import {writeFileSync} from "fs";
import { data } from "../helpers/interfaces";
import { getDatas } from "../helpers/getDatas";
require("dotenv").config();

export const encodeFunction: RequestHandler = async (req,res,next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({message: errors});

  const {url} = req.body;
  try {
    const datas: data[] = await getDatas();
    const checkInDatabase = datas.length ? datas.filter(u => u.long_url === url.trim()).length : 0;
    const bitly = new BitlyClient(process.env.ACCESS_TOKEN || "", {});
    const result = await bitly.shorten(url);
   if(!checkInDatabase) writeFileSync('database.json',JSON.stringify([...datas,{long_url: result.long_url,link: result.link,id: result.id}]));
    res.json({urlInfo: {long_url: result.long_url,link: result.link,id: result.id}})
  } catch (error) {
    if (isBitlyErrResponse(error)) {
      res.status(400).json({message: error.description});
    } else {
      next(error);
    }
  }
}

export const decodeFunction: RequestHandler = async (req,res,next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({message: errors});

   const {link} = req.body;
   try {
    const bitly = new BitlyClient(process.env.ACCESS_TOKEN || "", {});
    const result = await bitly.expand(link);
    res.json({result})
   }catch(error) {
    if (isBitlyErrResponse(error)) {
      res.status(400).json({message: error.description});
    } else {
      next(error);
    }
   }
}