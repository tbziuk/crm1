import { Link } from "react-router-dom"
import "./AppNav.css";

const AppNav = (props) => {

    return (
        <nav className="mainNav">
            <ul>
                <li id="logo">
                    <Link to="/">📆CMR</Link>
                </li>
                <li>
                    <Link to="/add">Dodaj klienta</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default AppNav;