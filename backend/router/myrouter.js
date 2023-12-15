const express=require('express');
const router=express.Router();
const {load}=require("../functions/load");
router.get("/",load);

module.exports={router}