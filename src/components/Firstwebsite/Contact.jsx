import { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((preval) => {
            return {
                ...preval,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}, My mobile number is ${data.phone}, My email is ${data.email}, Here is what i want to say ${data.msg}`);
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full name</label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile number" />

                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}>
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;