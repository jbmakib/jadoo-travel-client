import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const BookService = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`https://ancient-brook-62418.herokuapp.com/service/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data))
            .catch((err) => setError("Invalid Request to server"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // style for dynamic background image
    const bookServiceStyle = {
        backgroundImage: `url(${service.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const issued = new Date().toISOString().split("T")[0];
        const order = data;
        order.price = parseFloat(order.price);
        order.status = "Pending";
        order.service = service;
        order.issued = issued;

        // send data to server
        axios
            .post("https://ancient-brook-62418.herokuapp.com/order", order)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("order added successfully\nWait for approve");
                    reset();
                }
            })
            .catch((err) => console.log(err.message));
    };

    if (!service._id) {
        return (
            <div>
                {error ? (
                    <>
                        <div className="h4 text-center my-5 fw-bold text-orange">
                            {error}
                        </div>
                        <Link to="/">
                            <div className="text-center">Back to home</div>
                        </Link>
                    </>
                ) : (
                    <div className="text-center my-5">
                        <div
                            className="spinner-border text-orange"
                            role="status"
                        ></div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <>
            <div style={bookServiceStyle} className="py-5">
                <div className="container text-center py-5">
                    <h2 className="bg-white py-2 px-3 d-inline-block">
                        {service.name}
                    </h2>
                    <div className="my-5 d-inline-block bg-dark text-white">
                        {service.description}
                    </div>
                    <h5 className="bg-white py-2 px-3 d-inline-block">
                        Full tour price: {service.price}
                    </h5>
                </div>
            </div>
            <div className="container my-3">
                <h3 className="my-2 text-center">Book Service</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            id="floatingFullName"
                            placeholder="Full Name"
                            {...register("name", { required: true })}
                            value={user.displayName}
                            readOnly
                        />
                        <label htmlFor="floatingFullName">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingYourEmail"
                            placeholder="Your Email"
                            {...register("email", { required: true })}
                            value={user.email}
                            readOnly
                        />
                        <label htmlFor="floatingYourEmail">Your Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            id="floatingCreditCardNo"
                            placeholder="Credit card no."
                            {...register("visaCardNo", { required: true })}
                        />
                        <label htmlFor="floatingCreditCardNo">
                            Credit card no.
                        </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control"
                            id="floatingHaveToPay"
                            placeholder="Have to pay"
                            {...register("price", { required: true })}
                            value={service.price}
                            readOnly
                        />
                        <label htmlFor="floatingHaveToPay">Have to pay</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="date"
                            className="form-control"
                            id="floatingSelectTimeForGoing"
                            placeholder="Select time for going"
                            {...register("start", { required: true })}
                        />
                        <label htmlFor="floatingSelectTimeForGoing">
                            Select time for going
                        </label>
                    </div>
                    <input className="btn btn-outline-orange" type="submit" />
                </form>
            </div>
        </>
    );
};

export default BookService;
