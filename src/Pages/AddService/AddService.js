import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const service = data;
        service.price = parseFloat(service.price);
        service.duration = parseInt(service.duration);
        service.ratings.rate = parseFloat(service.ratings.rate);
        service.ratings.raters = parseInt(service.ratings.raters);

        // send data to server
        axios
            .post("https://ancient-brook-62418.herokuapp.com/services", service)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Service added successfully");
                    reset();
                }
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div className="container">
            <h2 className="text-center">Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    placeholder="Service Name"
                />
                <input
                    type="number"
                    {...register("price", { required: true })}
                    placeholder="Service Price"
                />
                <input
                    {...register("features", { required: true })}
                    placeholder="Add main features"
                />
                <input
                    type="url"
                    {...register("img", { required: true })}
                    placeholder="Image url"
                />
                <input
                    type="number"
                    {...register("duration", { required: true })}
                    placeholder="Tour duration"
                />
                <input
                    type="number"
                    step="0.01"
                    {...register("ratings.rate", {
                        required: true,
                        min: 0,
                        max: 5,
                    })}
                    placeholder="Ratings"
                />
                <input
                    type="number"
                    {...register("ratings.raters", { required: true })}
                    placeholder="Total Raters"
                />
                <textarea
                    {...register("description", { required: true })}
                    placeholder="Short description"
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
