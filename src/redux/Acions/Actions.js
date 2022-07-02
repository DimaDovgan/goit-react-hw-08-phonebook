import { createAction ,createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios"

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const addItems = createAsyncThunk(
  'phone/item',
 async (obj) =>{
    const objfull = await axios.post("/contacts", obj)
    return {id:objfull.data.id,name:objfull.data.name,number:objfull.data.number}
  
  }
)

export const delateContact = createAsyncThunk(
  'phone/delateContact',
 async (id) =>{
    await axios.delete(`/contacts/${id}`).then(ff=>console.log(ff)).catch(err=>console.log(err))
   const arr = await giveItems();
    return arr
  }
)
export const FilterValueState= createAsyncThunk(
  'phone/FilterValueState',
 (text) =>{
   return text; 
  }
)

export const readingHost = createAsyncThunk(
  'phone/delateContact',
  async () => {
    const {data} = await axios.get("/contacts");
    if (data) {
        return data
    }
  }
)


export const giveItems = async () => {
    const items = await axios.get("/contacts");
    return items.data
    
}
