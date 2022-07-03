import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import{Button} from "react-bootstrap"
export const PersonlistItem = ({ name, number, id, deleteContact }) => {
    const dispatch = useDispatch();
    const deleteContactValue = () => {
        console.log()
        dispatch(deleteContact(id))
    }
    return <li className="mt-3" >{name} : {number} <Button variant="outline-danger" onClick={deleteContactValue}>Delete</Button></li>
}

PersonlistItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    
}