const chalk =require("chalk");
const validator=require('validator');
// console.log(chalk.blue.italic("hello world")); 
// console.log(chalk.green.underline("hello world")); 
// console.log(chalk.green.underline.inverse("hello world")); 
// console.log(chalk.red.underline.inverse("hello world"));// background is blue by inverse

// const res =validator.isEmail("ashish99866gmail.com"); // false
const res =validator.isEmail("ashish99866@gmail.com"); // true
// console.log(res);
console.log(res ? chalk.red.inverse(res):chalk.green.inverse(res));



