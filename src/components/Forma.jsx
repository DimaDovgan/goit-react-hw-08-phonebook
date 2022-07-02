import { useState} from "react"
import styles from "./style-phonebook.module.css"
import { addItems } from "../redux/Acions/Actions";
import { useDispatch } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const FormContacts = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const hendelChange = (event) => {
        const keyObject = event.currentTarget.name
        switch (keyObject) {
        case 'name':
        setName(event.currentTarget.value)
    break;
        case 'number':
        setNumber(event.currentTarget.value)
    break;
    default:
    console.log("error");
        }  
    }

    const addPerson = (event) => {
        event.preventDefault();
        dispatch(addItems({ name, number}));
        formReset();
        
    }
    const formReset = () => {
        setName("");
        setNumber("");
    }
    
    return <Form className=" form-floating mb-3 " onSubmit={addPerson} >
  <div className=" pl-10 col-auto mt-3">
    <label  className="form-label">Name :  </label>
            <input name="name"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
     required
       value={name}
              onChange={hendelChange}/>
        </div>
    <div className="col-auto mt-3">
    <label  className="form-label">Number :  </label>
            <input type="tel"
       name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       value={number}
      onChange={hendelChange}/>
    </div>
  
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3 mt-3">add contact</button>
  </div>
</Form>
    }
