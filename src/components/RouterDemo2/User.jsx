import { useLocation, useNavigate, useParams } from "react-router-dom";

const User = () => {
    const { fname, lname } = useParams();
    // const userName = name || 'Parth';  // params ma bydefault value aapava mate aa condition use thay che.

    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();
    console.log(navigate);


    const locationBtn = () => {
        alert("You are awesome");
    }

    const goBack = () => {
        navigate(-1);           // -1 means one step back jay. Goback one steps means one type of back button.
    }

    const homePage = () => {
        navigate("/");          // set a path for go to the home page.
    }

    return (
        <>
            <div className="all">
                {/* ========== useParams() start ========== */}

                <h1 className="h1">My name is {fname} {lname}</h1>

                {/* ========== useParams() end ========== */}





                {/* ========== useLocation() start ========== */}
                {/* Aa location.pathname vali condition same thase to j button display thase. Aa functionality premium vali web app banavava mate thay che. */}

                <h1 className="h1">My current location is {location.pathname}</h1>
                {location.pathname === '/user/parth/dobariya' ? (
                    <button onClick={locationBtn} className="pathBtn">Click Me</button>
                ) : null}

                {/* ========== useLocation() end ========== */}



                {/* ========== useNavigate() start ========== */}
                {location.pathname === '/user/parth/dobariya' ? (
                    <button onClick={goBack} className="pathBtn">Goback</button>
                ) : null}

                {location.pathname === '/user/parth/dobariya' ? (
                    <button onClick={homePage} className="pathBtn">Home page</button>
                ) : null}
                {/* ========== useNavigate() end ========== */}
            </div>
        </>
    )
}

export default User;