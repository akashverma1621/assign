import React from "react";
import { useNavigate } from "react-router-dom";



const Cart=({carts,handlerAdd,handlerRemove})=>{
    const back=useNavigate();
    const TotalPrice = carts.reduce((price,item)=>price+item.quality*item.price,0);
    // console.log(day)
    const getBack=()=>{
        back('/');
    }
    return(
        <>
        <div className="mx-10 my-10 ">
            <button onClick={getBack}>
                 Back 
            </button>
            {carts.length===0 && <div className="font-bold text-center mt-10">no items</div>}
            {carts.map((value)=>{
                return(
                   <div className="h-auto w-4/5 m-10 border-solid border-2">
                   <div className="flex">
                   <img className="h-24 w-24"
                   src={value.image}
                   alt={value.title}/>
                  
                   <div className="ml-10">{value.title}</div>
                   <div className="ml-20">
                    <button className="text-3xl mr-10" onClick={()=>handlerAdd(value)}>+</button>
                    
                    <button className="text-3xl mr-10" onClick={()=>handlerRemove(value)}>-</button>
                   </div>
                   <div>
                    {value.quality} * {value.price}
                   </div>
                    </div>
                    
                   </div>
                    
                )
            })}
            <div className="font-bold text-right mr-20">
                        TotalPrice : {TotalPrice}
                    </div>
        </div>
       
        </>
    )
}


export default Cart;
