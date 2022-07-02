import { useState } from "react"
import { useDispatch } from "react-redux/es/exports";
import { login } from "../redux/Acions/ActionForLogin";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export const LoginForm = () => {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHeandelChange = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
  
  case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
    break;
  default:
    console.log(`Sorry, we are out of ${name}.`);
        }
        
    }
    const submiteForm = (event) => {
        event.preventDefault();
        dispatch(login({email:email,password:password}))

        
        
    }

    return <div><Form  onSubmit={submiteForm}>
        <div className="mb-3 ">
  <label className="form-label">Email address</label>
  <input  className="form-control" value={email} name="email" onChange={onHeandelChange} placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
  <label  className="form-label">Password</label>
  <input className="form-control" value={password} name="password" onChange={onHeandelChange}/>
        </div>
        <Button type="submit" variant="success">Submite</Button>
        
    </Form></div>
}
