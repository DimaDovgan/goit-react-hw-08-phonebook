import './App.css';
import { PhoneBook } from "./components/Phone-book.jsx"
import { Navigate } from "./components/Navigate";
import { LoginForm } from './components/LoginForm'
import { RegistarationForm } from './components/RegistrationForm'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrivateContacts from './Route/PrivateContacts';
import { HomePage } from './components/HomePage';
import {PublicRoute} from "./Route/PubliceRoute.jsx"
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {reduserff} from './redux/redusers/reduser'



function App() {
  const token = useSelector(state => state.Person.token)
  
  return (<>
    <Navigate />
     <Routes>
      <Route exact path='/' element={<HomePage />}/>
        <Route path='contacts' element={<PrivateContacts ><PhoneBook /></PrivateContacts>} />
        <Route exact path='login' restricted element={ <PublicRoute ><LoginForm/></PublicRoute>}/>
        <Route exact path='register' restricted element={ <PublicRoute ><RegistarationForm/></PublicRoute>}/>
   
    </Routes>
  </>
   
  )
}

export default App;
