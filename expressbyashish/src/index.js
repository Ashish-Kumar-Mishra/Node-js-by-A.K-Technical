const express =require("express")
const app =express();
const port =8000;
// built in middlewar
app.use(express.static(path))

app.get("/",(req,res)=>{
res.send("hello from express server")
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});