const express=require("express");
const app=express();
 const port =2000;
 app.get("/",(err,res)=>{
     res.send("welcome to home page");
 });
 app.get("/about",(err,res)=>{
    res.send("welcome to about page");
});

app.get("/contact",(err,res)=>{
    res.send("welcome to contact page");
});
// app.get("/temp",(err,res)=>{
//     // res.send("welcome to temp page");
//     res.write("welcome to temp page");
//     res.send([
//     {
//         id:1,
//         name:"ashish",
//     },
//     {
//         id:1,
//         name:"ashish",
//     }, {
//         id:1,
//         name:"ashish",
//     }
// ]);

// });
app.get("/temp",(err,res)=>{

    res.json([
    {
        id:1,
        name:"ashish",
    },
    {
        id:1,
        name:"ashish",
    }, {
        id:1,
        name:"ashish",
    },
]);
});
app.listen(port,()=>{
    console.log(`listening to port no is ${port}`);
});