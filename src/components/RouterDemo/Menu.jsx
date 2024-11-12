import { Link, NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <>
            {/* Aa alg alg link ne click karavathi alg alg contain show thay che tethi aapanane lage che ke alg alg pages load thay che but actually alg alg page load nathi thata. te single page j hoy che pn te single page ni ander j component render thay che jene single page web application kevay che. */}

            <h2>This is a <span>NavLink</span> tag.</h2> {/* Within ReactJS the link tag doesn't tell us which link is active but the solution is NewLink.  NewLink has an active property in the className attribute so that we know which link is active. */}
            <br />
            <NavLink className={({ isActive }) => (isActive ? "active_class default_class" : "default_class")} to={"/"}> About Us </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active_class default_class" : "default_class")} to={"/contact"}> Contact </NavLink>
            <br /><br /><br />

            <h2>This is <span>Link</span> tag.</h2>  {/* In react, Link tag is not reload the page. this is the main banefit of using react */}
            <br />
            <Link to={"/"} className='menu'> About Us </Link>
            <Link to={"/contact"} className='menu'> Contact </Link>

            <br /><br /><br />

            <h2>This is <span>anchor</span> tag.</h2> {/* <a> tag is reload the page that's the reason people used react js. */}
            <br />
            <a href="/" className='menu'> About Us </a>
            <a href="/contact" className='menu'> Contact </a>

            <br /><br /><br /><br />
        </>
    )
}

export default Menu;
