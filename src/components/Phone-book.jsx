import {ContactList}   from "./person-list/Person-list"
import {Filter}  from "./Filter"
import {FormContacts}  from "./Forma"
import { useEffect } from "react"
import { readingHost } from "../redux/Acions/Actions"
import { useDispatch } from "react-redux/es/exports"

export const PhoneBook = () => {
     const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readingHost());

    },[dispatch])

    return <div className=" container-fluid   mr-4" >
        
        <h1>Phonebook</h1>
        <FormContacts />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
    </div>

}
