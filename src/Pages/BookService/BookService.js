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
            <>
                <div className="h4 text-center my-5 fw-bold text-orange">
                    {error}
                </div>
                <Link to="/">
                    <div className="text-center">Back to home</div>
                </Link>
            </>
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
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        placeholder="Full Name"
                        value={user.displayName}
                        readOnly
                    />
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Your email"
                        value={user.email}
                        readOnly
                    />
                    <input
                        {...register("visaCardNo", { required: true })}
                        placeholder="Credit card no."
                    />
                    <input
                        type="number"
                        {...register("price", { required: true })}
                        placeholder="Have to pay"
                        value={service.price}
                        readOnly
                    />
                    <label>
                        Select start time
                        <input
                            type="date"
                            {...register("start", { required: true })}
                            placeholder="Select time for going"
                        />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default BookService;
