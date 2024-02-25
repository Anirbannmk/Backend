/* Task 1: Create a Nodejs server to handle request at port 3001, give proper message at console "Server started..." if actually it started or give "unable to start server" if there is an issue in starting the server.

Task 2: Create a end point “/” return all the products from products.json file to users. The products.json is json file with Title, Category and price as three properties.

Task 3: Add some products in file with category="food" and category="others"

Task 4: Edit the above endpoint to receive the category and return the products matching the category e.g /?category=food returns all the products with category=food */

/* const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.sendFile('./codequotient/products.json',{root:__dirname});
}) */
const fs=require("fs");
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/product'){
        res.setHeader('Content-Type','application/json');
        let data = fs.readFileSync('./products.json','utf-8');
       // res.write(data);
        
        let products = JSON.parse(data);
        let result = products.find(product=>{
            return product.catagory =="Foods"
        })  
        console.log(result);          
        res.write(JSON.stringify(result));
        res.end();
    }
}).listen(4040)
