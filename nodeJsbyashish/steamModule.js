
const fs =require("fs");
const http=require("http");

const server=http.createServer();

server.on("request",(req,res)=>{
    // var fs=require("fs");
    // fs.readFile("input.txt",(err,data)=>{
        //     if(err)return console.log(err);
        //     res.end(data.toString());
        // });
        // 2nd way
        // reading from a stream
        // create a readable Stream
        // handle tream events-->data,end ,and error
        
        
        
      /*  const rstream =fs.createReadStream("input.txt");
        // const rstream =fs.createReadStream("inputs.txt");
        rstream.on("data",(chunkdata)=>{
                res.write(chunkdata);
            })
            rstream.on("end",()=>{
                    res.end();
                });
                rstream.on("error",(err)=>{
                        console.log(err);
                        res.end("file not found ");
                    })*/
                    //3rd way
                    const rstream=fs.createReadStream("input.txt");
                    rstream.pipe(res);
                });
            
            server.listen(8000,"127.0.0.1",()=>{
                console.log("listening to port  no 8000")
                });

