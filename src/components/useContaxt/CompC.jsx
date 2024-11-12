import { FirstName, LastName } from "../../App";

const CompC = () => {
    return (
        <>
        {/* useContext : */}
            {/* Consumer hamesha function ne j expect karta he. directly h1 ni ander {fname} karine no lakhi shakay. */}
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1>My name is {fname} {lname}</h1>
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
        </>
    );
};

export default CompC;