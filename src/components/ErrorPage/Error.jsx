import { NavLink } from "react-router-dom";

const Error = () => {

    return (
        <>
            <div className="errorPage">
                <h1>Error 404 was found</h1>
                <p>The page doesn't exist</p>
                <NavLink to="/" className="backNavlink">Go back</NavLink>
            </div>
        </>
    );
}

export default Error;