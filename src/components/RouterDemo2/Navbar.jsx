import { NavLink } from "react-router-dom";
import './Navbar.css';

const Error = () => {
    return (
        <>
            <div className="nav_style">
                <NavLink to='/' className={({ isActive }) => (isActive ? "active_class default_class" : "default_class")}>About Us</NavLink>
                <NavLink to='/service' className={({ isActive }) => (isActive ? "active_class default_class" : "default_class")}>Service</NavLink>
                <NavLink to='/user' className={({ isActive }) => (isActive ? "active_class default_class" : "default_class")}>User</NavLink>
                <NavLink to='/contact' className={({ isActive }) => (isActive ? "active_class default_class" : "default_class")}>Contact</NavLink>
            </div>
        </>
    )
}

export default Error;