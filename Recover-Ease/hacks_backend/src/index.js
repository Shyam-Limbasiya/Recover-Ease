const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");

app.set('view engine','ejs')
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.listen(3000,()=>{
    console.log("port connected");
})