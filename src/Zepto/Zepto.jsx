import React, { useContext, useEffect, useRef, useState } from "react";
import Product from "./Product.jsx";
import NotFound from "./NotFound.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Utility/productSlice.js";
const Zepto = () => {
  const {productList} = useSelector((state)=>state.productSlice)
  const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getAllProducts());
 
  },[])
  return (
    <div className="container">
      
      <div className="row">
        {productList.length == 0 ? (
          <NotFound />
        ) : (
          productList.map((elm, ind) => <Product key={ind} elm={elm} />)
        )}
      </div>
    </div>
  );
};

export default Zepto;
