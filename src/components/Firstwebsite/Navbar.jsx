import { NavLink } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import logo from '../../images/logo.svg';

const Navbar = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Parth Dobariya</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className={({isActive}) => (isActive ? "nav-link a-link active_class" : "nav-link a-link")} aria-current="page" to="/">home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive}) => (isActive ? "nav-link a-link active_class" : "nav-link a-link")} to="service">services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive}) => (isActive ? "nav-link a-link active_class" : "nav-link a-link")} to="/about">about</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive}) => (isActive ? "nav-link a-link active_class" : "nav-link a-link")} to="contact">contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


            {/* uper bootastrap na code ma a tag hoy cge tene a  ni jagyaye NavLink kari devu and 
                a tag ma path aapva mate href atrribute no use thay che but NavLink ma path aapva 
                mate to attribute no use thay che. */}

            {/* <NavLink to="/"> Home </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/service"> Service </NavLink>
            <NavLink to="/contact"> Contact </NavLink> */}
        </>
    );
};

export default Navbar;