// app.get(route,callback)
// API
// get-read // to get data from server
// post-to create new data
// put- update
// delete-delet

const express=require("express");
const app=express();
const path=require("path");
const port =8000;

// // relative absolute
// // console.log(__dirname);

// // console.log(path.join(__dirname,"../public"));

// built in middlewar
const staticPath=path.join(__dirname,"../public")


app.set("view engine","hbs");

// app.use(express.static(staticPath));

// template engine route
app.get("",(req,res)=>{
    res.render('index');
})

app.get("/",(req,res)=>{
    res.end("hello world from the express")
})
app.get('/about',(req,res)=>{
    res.end("hello world from the home")
})
app.listen(port,()=>{
    console.log(`listening  the port at ${port}`);
})