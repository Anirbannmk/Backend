/* Task 1: Create a end point “/addtask” to  receive data from html page like title and id and status,
 store in into a json file todo.json , the json file contains an array so update the array with new 
 task.

Task 2: Create an endpoint to handle the request “/tasks?status=pending” and return all the tasks from 
json with status=pending */

const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const fs=require('fs');
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/addtask',(req,res)=>{
     const data=fs.readFileSync('./todo.json','utf-8');
     const arr=JSON.parse(data);
     const{title,id,status}=req.query;
     const newdata={title,id,status};
     arr.push(newdata);
     console.log(arr);
    fs.writeFile('./todo.json',JSON.stringify(arr),(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("data is appended");
            console.log("data is appended successfully");
        }
    });
    console.log("hello");
})
app.use('/tasks',(req,res)=>{
     const file=JSON.parse(fs.readFileSync('./todo.json','utf-8'));
    // res.send('enter in task');
     console.log(file);
     let arr=file.find((ele)=>{
        return ele.status=="panding";
     })
     console.log(arr);
     res.setHeader('Content-Type','application/json');
     res.send(arr);
})
app.listen(5052);