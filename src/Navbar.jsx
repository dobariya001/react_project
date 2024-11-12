import { NavLink } from "react-router-dom";
import './components/ErrorPage/style.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <NavLink to="/" className={({isActive}) => (isActive ? "active_class default_class" : "default_class")}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => (isActive ? "active_class default_class" : "default_class")}>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => (isActive ? "active_class default_class" : "default_class")}>Contact</NavLink>
            </div>
        </>
    );
}

export default Navbar;