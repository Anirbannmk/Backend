// Task 1: Create a end point to handle the “/products?category=cloths” that return all the products 
//from products.json file matching the category passed to users.
// The products.json is json file with Title, Category and price as three properties.

// Task 2: Create a end point to handle the “/filterproducts?category=cloths&price=300” that 
//return all the products from products.json file matching the category and price>=(specified price) to
// users. The products.json is json file with Title, Category and price as three properties.
const fs=require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/products'){
        res.setHeader('Content-Type','application/json');
        const data=JSON.parse(fs.readFileSync('./products.json','utf-8'));
        console.log(data);
        
         let result=data.find((ele)=>{
            return ele.catagory=='cloths';
         })
         console.log(result);
         res.write(JSON.stringify(result));
    }
    else if(req.url=='/filterproducts'){
        res.setHeader('Content-Type','application/json');
        const data=JSON.parse(fs.readFileSync('./products.json','utf-8'));
        console.log(data);
        let result=data.filter((ele)=>{
            return ele.catagory=='cloths'&&ele.price>=300;
         })
         res.write(JSON.stringify(result));
    }
}).listen(4055);
