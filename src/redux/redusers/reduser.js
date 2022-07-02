import {addItems,delateContact,FilterValueState,readingHost} from '../Acions/Actions'
// import {createReducer} from '@reduxjs/toolkit';
// import { combineReducers } from 'redux'
//import PhoneSlice from '../Acions/Actions'
import {createSlice} from '@reduxjs/toolkit'


const PhoneSlice = createSlice({
  name: 'phone',
  initialState: {
    items: [],
    filter: ''
  },
  reducers: {
    resetItem: (state) => {
      state.items = [];
    }
    
  },
  extraReducers: {
    [addItems.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.items.push(payload)
      }
      
    },
    [delateContact.fulfilled]: (state, { payload }) => {
      state.items = payload;
    },
    [FilterValueState.fulfilled]: (state, { payload }) => {
      state.filter = payload;
    },
    [readingHost.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.items = payload;
      }
    }
  }
})
// const { action, reducers } = PhoneSlice;
export const reduserff= PhoneSlice.reducers;
 const PhoneSliceReduser = PhoneSlice.reducer;
export default PhoneSliceReduser;





























// const itemsReduser = createReducer([], {
//   [addItems.fulfilled]: (state, {payload}) => {
//     //console.log("meta",meta)
//     // console.log("itemsReduser = createReducer",name, number, id )
//     //  const obj = { name, number, id }
//     //  console.log("obj",obj)
//     console.log("Pauloude reduser",payload)
//     // if (state.contacts.items.some(contact => contact.name.toLocaleLowerCase() === obj.name.toLocaleLowerCase())) {
//     //    alert(`${obj.name} is anlready in contacts npm run build`)
//     //        return [...state]
//     // }
//     return [...state,payload]
//   },
//   [items]: (state, action) => {console.log("ITEMS")
//     return [...state, action.payload]
//   },
//   [deleteContact]: (state, action) => {
//     let delateContacts = state.filter(contact => (contact.id !== action.payload));
//     return [...delateContacts]
//   },
//   [readingLocalHost]: (state, action) => {
//     if (!action.payload) { 
//     return [...state]
//     }
//     return [...action.payload]
//   },
  
// });
// const filterReduser = createReducer("", {
//   [filter().type]: (state, action) => {
//     return action.payload
//   }
// });


// const reduser = combineReducers({
//   items: itemsReduser,
//   filter:filterReduser,
// })
// export const rootReduser = combineReducers({
//   contacts:reduser
// })