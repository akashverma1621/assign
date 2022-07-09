import React from 'react';
import Product from './product';
import { Route,Routes } from "react-router-dom";
import Cart from './cart';
const Rout=({products,carts,handlerAdd,handlerRemove})=>{
    return(
        <>
        <Routes>
      <Route path='/' element={<Product products={products} handlerAdd={handlerAdd}/>}>
        
      </Route>
      <Route path='/cart' element={ <Cart carts={carts} handlerAdd={handlerAdd} handlerRemove={handlerRemove}/>}>
       
      </Route>
    </Routes>
        </>
    )
}
export default Rout;