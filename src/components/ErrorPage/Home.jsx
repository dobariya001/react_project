import { useParams } from "react-router-dom";

const Home = () => {
    const { fname, lname } = useParams();
    return (
        <>
            <div className="home">
                <h1>Home page</h1>
            </div>
        </>
    );
}

export default Home;