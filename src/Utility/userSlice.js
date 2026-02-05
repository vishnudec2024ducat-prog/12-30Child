import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUser = createAsyncThunk("getAllUser", async ()=>{
    let res = await axios.get(
      `https://6970870d78fec16a63fdffa2.mockapi.io/badBoys`,
    );
    return res.data
})
export const addUser = createAsyncThunk("addUser",async(user)=>{
    let res = await axios.post(
      `https://6970870d78fec16a63fdffa2.mockapi.io/badBoys`,user
    );
    return res.data
})

export const deleteUser = createAsyncThunk("deleteUSer",async (id)=>{
    let res = await axios.delete(
      `https://6970870d78fec16a63fdffa2.mockapi.io/badBoys/${id}`,
    );
    return id
})
export const getSingleUser = createAsyncThunk("getSingleUser",async (id)=>{
  let res = await axios.get(
    `https://6970870d78fec16a63fdffa2.mockapi.io/badBoys/${id}`
  );
  return res.data
})

export const editUser = createAsyncThunk("editUser",async (user)=>{
  let res = await axios.put(
    `https://6970870d78fec16a63fdffa2.mockapi.io/badBoys/${user.id}`,user
  );
  return res.data
})
const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userList: [],
    user: {
      name: "",
      age: "",
      email: "",
      address: "",
      contactNo: "",
      image: "",
      isAuthnticate:false,
    },
    emptyUser: {
      name: "",
      age: "",
      email: "",
      address: "",
      contactNo: "",
      image: "",
    },
    checkFormType: "",
    show: false,
  },
  reducers: {
    handleModalForm: (state, action) => {
      state.show = action.payload.show;
      state.checkFormType = action.payload.formType;
    },
    handleUserForm:(state,action)=>{
        state.user={...state.user,...action.payload}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.userList = action.payload;
    }).addCase(addUser.fulfilled,(state,action)=>{
        state.userList=[...state.userList,action.payload]
        state.isAuthnticate=true
    }).addCase(deleteUser.fulfilled,(state,action)=>{
        let afterDelete = state.userList.filter((elm)=>elm.id!=action.payload)
        state.userList = afterDelete
    }).addCase(getSingleUser.fulfilled,(state,action)=>{
          state.user = action.payload
    }
    ).addCase(editUser.fulfilled,(state,action)=>{
       let ind =  state.userList.findIndex((elm)=>elm.id==action.payload.id)
       state.userList[ind]=action.payload
    })
  },
});
export const { handleModalForm, handleUserForm } = userSlice.actions;
export default userSlice.reducer