const qs = require('qs');
const express = require('express');
const router = express.Router();
var path = require('path');

//DB
router.get("/",(req,res)=>{
    res.sendFile(path.resolve('./frontend/static/index.html'));
})

router.get("/api/",async(req,res)=>{
    const JSONData = await getFLag();
    res.json(qs.parse(JSONData));
})


module.exports=router;