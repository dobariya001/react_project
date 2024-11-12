import web from '../../images/image1.svg';
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow your business with" 
                imgsrc={web}
                visit="/service"
                btnname="Get Started"
            />
        </>
    );
};

export default Home;