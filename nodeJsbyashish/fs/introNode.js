// console.log("hello world"); 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');module.js
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selectors & more designing </title>
      
      <style>
          .container{
              border: 2px;
              background-color:rgb(157, 194, 120) ;
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
      
      a{
          text-decoration: none;
          color: black;
      }
      a:hover{
          color:rgb(160, 140, 140);
          background-color: rgb(12, 91, 128);
      }
      a:visited{
          background-color: rgb(131, 131, 240);
      }
      .btn{
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: bold;
          background-color: rgb(31, 192, 125);
          padding: 6px;
          border: none;
          cursor: pointer;
          font-size: 13px;
          border-radius: 4px;
      }
      .btn:hover{
  color: darkgoldenrod;
  background-color: darkgreen;
  border: 2px solid blue;
  
      }
      
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3> this is my heading</h3>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Corrupti quidem voluptatum assumenda animi possimus! Non enim suscipit,
                illo obcaecati eaque rerum excepturi dicta deserunt inventore architecto 
                provident dolor exercitationem quisquam.</p>
                <a href="https://www.google.com"class="btn"> Read more</a>
                <button class="btn"> contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});