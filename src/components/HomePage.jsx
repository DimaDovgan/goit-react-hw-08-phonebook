import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
export const HomePage = () => {
    const isLoging = useSelector(state => state.Person.isLoggedIn);
    return <div>{isLoging ?<h1>personal office</h1> :<h1>welcome to this site</h1>}
        <Outlet /></div>
}