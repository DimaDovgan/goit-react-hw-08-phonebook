import { createSlice } from '@reduxjs/toolkit'
import { registration,login,logOut} from '../Acions/ActionForLogin';
import { useNavigate } from "react-router-dom";
const PersonSlice = createSlice({
  name: 'Person',
  initialState: {
    user: { name: null, email: null },
    token:null,
    isLoggedIn:false
  },
  reducers: {
    
  },
  extraReducers: {
    [registration.fulfilled]: (state, { payload }) => {
      console.log("dsdfs  payloude",payload)
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
    }
    
  }
})
const PersonSliceReduser = PersonSlice.reducer;
export default PersonSliceReduser;




