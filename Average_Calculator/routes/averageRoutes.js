const express=require("express");
const router=express.Router();
const average = require("../controllers/Average");
router.get("/numbers/:id",average);

module.exports=router;