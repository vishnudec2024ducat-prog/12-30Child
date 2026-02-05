import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllProducts = createAsyncThunk("getAllProducts",async ()=>{
    let res = await axios.get("https://fakestoreapi.com/products");
    return res.data
})

const productSlice = createSlice({
    name:"product",
    initialState:{
        productList:[],
        allProductList:[],
        inpVal:"",
        isLoading:true
    },
    reducers:{
        handleInputVal:(state,action)=>{
            state.inpVal=action.payload
        },
        handleSearch:(state,action)=>{
            let afterFilter = state.allProductList.filter((elm) =>
              elm.title.toLowerCase().includes(state.inpVal.toLowerCase()),
            );
            state.productList = afterFilter
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.isLoading=true 
            state.productList = []
            state.allProductList=[]
        }).addCase(getAllProducts.rejected,(state,action)=>{
            state.isLoading = true;
            state.productList = [];
            state.allProductList = [];
        }).addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.productList = action.payload;
            state.allProductList = action.payload;
        })
    }
})
export const { handleInputVal, handleSearch } = productSlice.actions;
export default productSlice.reducer;