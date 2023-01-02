const express = require('express')
var app = express();

app.get("/home",function (req,resp) 
{
    resp.sendFile("/public/index.html",{root:__dirname});
})


app.get("/submit",function (req,resp)
{
    resp.sendFile("/public/hello.html",{root:__dirname});
})

app.listen(4000);
console.log("server running on 4000");