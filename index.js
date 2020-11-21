const dbconnection=require("./database");
const express=require('express');
var mongoose=require('mongoose');
const application=express();
const path=require("path");
const bodyparser=require('body-parser');
const cors=require('cors');
const appRoutes=require('./routes/appRoutes');

application.use(bodyparser.urlencoded({
    extended:true
}));
application.use(bodyparser.json());
application.use(cors());;
application.use('/',appRoutes);

application.listen("3000",()=>{
    console.log("server started at port 3000");
})