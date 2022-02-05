const path=require('path');
console.log(path.dirname("C:\Users\hp\node js\pathModule\path.js"));
console.log(path.extname("C:\Users\hp\node js\pathModule\path.js"));
console.log(path.basename("C:\Users\hp\node js\pathModule\path.js"));

const myPath=(path.parse("C:\Users\hp\node js\pathModule\path.js"));
// console.log(myPath.name);
 console.log(myPath.root);