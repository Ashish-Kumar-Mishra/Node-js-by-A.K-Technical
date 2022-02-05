// the http.createServer() which includes request and Response parameters which is supplied by Node.js
//  the request object can be used to get information about the current  http request eg., url,request,header,and data
// the response object can be used to send a response for a current HTTP                              
// if the response from the http server is supposed to  be displayed as html,css,js 
// you should inclde an http header with the correct content type
// const http=require("http")

// const server =http.createServer((req,res)=>{
// res.end('hello from other side Ak ji');
// })

// server.listen(8000,"127.0.0.1",()=>{
// console.log("listening to port  no 8000")
// });



/*const http=require("http")

const server =http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=="/"){
res.end('hello from other side Ak ji');
}
else if(req.url=="/about"){
    res.end("hello from about us sides")

}
else if(req.url=="/contact"){
    res.end("hello from contact us sides")
}
else if(req.url=="/userapi"){
        res.end("hello from userAPI sides")

}else {
    res.writeHead(404,{"content-type":"text/html"});
    res.end("404 error page.page doesn't exist")
}
});
server.listen(8000,"127.0.0.1",()=>{
console.log("listening to port  no 8000")
});*/




