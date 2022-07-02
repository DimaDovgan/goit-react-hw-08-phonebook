import { createAction ,createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate,Navigate } from "react-router-dom";



axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization=`Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization=""
  }
}
export const registration = createAsyncThunk(
  '/users/signup',
  async (obj) => {
      
        try {
            const { data } = await axios.post('/users/signup', obj);
          token.set(data.token); 
          return data
        } catch (error) {
            
        }
        
  }
)
 // / users / login
 //let navigate = useNavigate();

  export const login = createAsyncThunk(
  '/users/signup',
    async (obj) => {
      
      try {
            const respons = await axios.post('/users/login', obj);
          token.set(respons.data.token);
        
          return respons.data
        } catch (error) {
            
        }
          
      
        
  }
)

export const logOut = createAsyncThunk(
  '/users/logout',
  async () => {
    try {

          await axios.post('/users/logout');
          token.unset();

        } catch (error) {
            
        }
        
  }
)