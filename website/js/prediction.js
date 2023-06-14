
document.getElementById('send-btn').addEventListener('click', async () => {
    const response = await fetch("http://127.0.0.1:8000/predict", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body:JSON.stringify({
            "data": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        })
    })

    const content = await response.json();    
    document.getElementById("response").innerHTML = content['prediction'];
})
/* 
const express=require("express");
const http=require("http");
// const bodyParser=require("body-parser");
const app=express();

app.get("/",function(req,res){

  const url="http://127.0.0.1:8000/predict";
  http.get(url,function(response){
    console.log(response);
  })
  res.send("Server is up and running")
})

app.listen(3000,function(){
  console.log("Server is running on port 3000");
}) */