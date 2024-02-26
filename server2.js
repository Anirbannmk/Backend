const express=require("express");
const bodyParser=require("body-parser");
const fs=require("fs");
const app=express();
let c=0;
app.use(bodyParser.urlencoded({extended:true}));
app.post('/signup',(req,res)=>{
    const{name,gender,age}=req.body;
    const user={name,gender,age };

    fs.appendFile('./users.txt',JSON.stringify(user)+'\n',(err)=>{
        if (err){
            res.send(err);
        } 
        else {
            res.send("Signup successfully");
        }
    });
});

app.get('/signup',(req, res) => {
    c++;
    res.send(`Invalid request method -${c}`);
});

app.listen(4046, () => {
    console.log("Server is running on port 4046");
});