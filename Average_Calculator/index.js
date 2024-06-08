const express=require("express");
const averageRoutes = require("./routes/averageRoutes");
const app=express();
require("dotenv").config();
const port=process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",averageRoutes);
app.listen(port,()=>{
    console.log(`running ${port}`);
})