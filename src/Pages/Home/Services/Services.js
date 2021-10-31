import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://ancient-brook-62418.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="container py-5">
            <h1 className="text-center">Services</h1>
            {services.length === 0 ? (
                <div className="text-center">
                    <div
                        className="spinner-border text-orange"
                        role="status"
                    ></div>
                </div>
            ) : (
                <div className="g-4 row row-cols-lg-4 row-cols-md-2 row-cols-1">
                    {services.map((service) => (
                        <Service key={service._id} service={service} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Services;
