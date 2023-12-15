const express=require('express');
const {router}=require("./router/myrouter");
const app=express();
app.use(express.static('frontend'))
app.use(router);
app.listen(3000,()=>{
    "Server running on 3000";
})