import React from "react";
import { useParams } from "react-router";

const BookService = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Watching services of {serviceId}</h2>
        </div>
    );
};

export default BookService;
