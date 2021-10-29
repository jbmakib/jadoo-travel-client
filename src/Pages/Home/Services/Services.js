import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="container py-5">
            <h1 className="text-center">Services</h1>
            <div className="g-4 row row-cols-lg-4 row-cols-md-2 row-cols-1">
                {services.map((service) => (
                    <Service key={service.name} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
