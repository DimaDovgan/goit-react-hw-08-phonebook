import { PersonlistItem } from "./Person-list-item"
import {delateContact } from '../../redux/Acions/Actions'
import { useSelector} from "react-redux";
export const ContactList = () => {
    const item = useSelector(state => {
        let filterArr = state.phone.items;
        return filterArr.filter(contact => contact.name.toLocaleLowerCase().includes(state.phone.filter.toLocaleLowerCase()))
    })

    return <ul className = "list-inline">{item.map(({ name, number, id }) => <PersonlistItem key={id} name={name} number={number} id={id} deleteContact={delateContact} />)}</ul> 
}

