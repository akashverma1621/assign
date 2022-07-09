import React from 'react';
import Header from './components/header';
import {BrowserRouter} from 'react-router-dom';
import {useEffect,useState} from 'react';
import Rout from './components/rout';


function App() {
  
  // const Data=createContext();
  const [products,setProducts]=useState([]);
  const [carts,setCart]=useState([]);

  const getData=async()=>{
      const api=`http://localhost:8080/get`;
      const response=await fetch(api);
      const data=await response.json();
      console.log(data);
      setProducts(data);
    }
    useEffect(()=>{
      getData();
    },[]);
  const handlerAdd=(product)=>{
    
    const productExist=carts.find((item)=>item.id===product.id);
    if(productExist)
    {
      setCart(carts.map((item)=>item.id===product.id ?
      {...productExist,quality :productExist.quality+1}:item))
    }
    else{
      setCart([...carts,{...product,quality:1}])
    }
  }
  const handlerRemove=(product)=>{
    const productExist=carts.find((item)=>item.id===product.id);
    if(productExist.quality===1)
    {
      setCart(carts.filter((item)=>item.id!== product.id))
    }else{
      setCart(carts.map((item)=>item.id===product.id?
      {...productExist,quality:productExist.quality-1}:item))
    }
  }
  
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Rout products={products} carts={carts} handlerAdd={handlerAdd} handlerRemove={handlerRemove}/>
    </BrowserRouter>
    </>
  );
}

export default App;
