import image2 from '../../images/image2.webp';
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name="Welcome to About page"
                imgsrc={image2}
                visit="/contact"
                btnname="Contact Now"
            />
        </>
    );
};

export default About;