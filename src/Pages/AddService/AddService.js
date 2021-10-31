import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

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
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingServiceName"
                        placeholder="Service Name"
                        {...register("name", { required: true })}
                    />
                    <label htmlFor="floatingServiceName">Service Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingServicePrice"
                        placeholder="Service Price"
                        {...register("price", { required: true })}
                    />
                    <label htmlFor="floatingServicePrice">Service Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingMainFeatures"
                        placeholder="Add main features"
                        {...register("features", { required: true })}
                    />
                    <label htmlFor="floatingMainFeatures">
                        Add main features
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="url"
                        className="form-control"
                        id="floatingImageUrl"
                        placeholder="Image url"
                        {...register("img", { required: true })}
                    />
                    <label htmlFor="floatingImageUrl">Image url</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingTourDuration"
                        placeholder="Tour Duration"
                        {...register("duration", { required: true })}
                    />
                    <label htmlFor="floatingTourDuration">Tour Duration</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="floatingRatings"
                        placeholder="Ratings"
                        {...register("ratings.rate", {
                            required: true,
                            min: 0,
                            max: 5,
                        })}
                    />
                    <label htmlFor="floatingRatings">Ratings</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingTotalRaters"
                        placeholder="Total Raters"
                        {...register("ratings.raters", { required: true })}
                    />
                    <label htmlFor="floatingTotalRaters">Total Raters</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control add-service-textarea"
                        id="floatingShortDescription"
                        placeholder="Short description..."
                        {...register("description", { required: true })}
                    />
                    <label htmlFor="floatingShortDescription">
                        Short description...
                    </label>
                </div>
                <input type="submit" className="btn btn-outline-orange" />
            </form>
        </div>
    );
};

export default AddService;
