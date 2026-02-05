import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice.js"
import userSlice from "./userSlice.js"
const store = configureStore({
    reducer:{
        productSlice,
        userSlice
    }
})

export default store;