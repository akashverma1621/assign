const { default: axios } = require('axios');
const express=require('express');
const path=require('path')
const app=express();
const PORT=process.env.PORT||8080;
app.use(express.json())
app.use(express.static(path.resolve(__dirname,"/human_resources/build")));


app.get('/get', async(req,res)=>{
  const api="https://fakestoreapi.com/products";
  let da;
 const response=await axios.get(api)
 .then(res=>{da=res.data})
 .catch(e=>{
  console.log("error"+e);
 });
//  console.log(da);
res.setHeader('Access-Control-Allow-Origin', '*');
 res.send(JSON.stringify(da))
})

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'human_resources/build','index.html'));
})
app.listen(PORT,console.log("server work"));