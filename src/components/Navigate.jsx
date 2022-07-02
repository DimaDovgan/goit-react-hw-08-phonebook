import { Link, NavLink } from "react-router-dom"
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
import { UserMenu } from "./UserMenu"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Nav } from "react-bootstrap"

export const Navigate = () => {
    const navigate=useNavigate()
    const isLoging = useSelector(state => state.Person.isLoggedIn);
    
  //const token = useSelector(state => state.Person.token)
  useEffect(() => {
      if (isLoging) {
        navigate("/")
    }
  }, [isLoging])

    return <div  > <nav className="nav  justify-content-center">
        <NavLink to={"contacts"} className="nav-link" style={({ isActive }) => ({
    color: isActive ? '#d9960f' : '#383735',
                })} >contacts</NavLink >
        <NavLink to={"/"} className="nav-link"  style={({ isActive }) => ({
    color: isActive ? '#d9960f' : '#383735',
                })}>Home</NavLink >
    </nav>
        <nav className="nav justify-content-center">
        {isLoging ? <UserMenu /> : <div className="nav  ">
            <NavLink to={"register"} className="nav-link" style={({ isActive }) => ({
    color: isActive ? '#d9960f' : '#383735',
                })}>register</NavLink >
            <NavLink to={"login"} className="nav-link" style={({ isActive }) => ({
    color: isActive ? '#d9960f' : '#383735',
                })}>login</NavLink >
                
            </div>}
            </nav>
    </div>


}