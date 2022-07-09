
import React from "react";

const Product=({products,handlerAdd})=>{

return(
    <>
   <div className="flex flex-wrap ">
    {
        products.map((vale,index)=>{
            return(
                <div className=" h-auto w-1/6 ml-20 mt-10  border-solid border-2">
                   <div className="m-10">
                    <img className="h-48 w-48" src={vale.image} alt="loading"/>
                   </div>
                    <div className="text-left m-5">
                        <div >{vale.title}</div>
                        <div >Category: {vale.category}</div>
                        <div > {vale.price}</div>
                        <div>
                            <button className=" relative bg-slate-300" onClick={
                            ()=> handlerAdd(vale)
                            }>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
   </div>
    </>
)
}
export default Product;
