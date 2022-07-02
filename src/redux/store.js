import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit';
//import { rootReduser } from './redusers/reduser'
import PhoneSliceReduser from './redusers/reduser';
import PersonSliceReduser from './redusers/PersonInReduser';

import { combineReducers } from '@reduxjs/toolkit'; 
import loger from 'redux-logger'

const middlewareLoger = [...getDefaultMiddleware(),loger]

const rootReducer = combineReducers({Person: PersonSliceReduser, phone: PhoneSliceReduser})

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewareLoger,
  
})
