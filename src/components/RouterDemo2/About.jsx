const About = (props) => {         // aa ek file ma property banavine pass karel che.
    return (
        <>
            <div className="h1">
                <h1>Hello, I am {props.name} page</h1>  {/* props na use thi name render karavyu che. */}
            </div>
        </>
    )
}

export default About;