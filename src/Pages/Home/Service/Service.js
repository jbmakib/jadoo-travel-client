import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({
    service: { _id, name, img, price, features, duration, ratings },
}) => {
    return (
        <div className="col service">
            <div className="h-100 rounded-4 overflow-hidden card">
                <img
                    className="card-img-top border-bottom border-4 border-orange"
                    src={img}
                    alt={name}
                />
                <div className="card-body">
                    <div className="fw-bold border-bottom pb-3 border-3 card-border">
                        <small>
                            <i className="fas fa-star text-orange"></i>
                            <span className="text-muted ps-1">
                                {ratings?.rate} ({ratings?.raters})
                            </span>
                        </small>
                        <small className="ps-3">
                            <i className="far fa-clock text-orange"></i>
                            <span className="text-muted ps-1">
                                {duration} {duration > 1 ? "days" : "day"}
                            </span>
                        </small>
                    </div>
                    <div className="pt-3 fw-bold card-title h5">{name}</div>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="m-0 text-secondary">{features}</small>
                        <p className="h5 m-0 text-orange">${price}</p>
                    </div>
                    <Link to={`/book-service/${_id}`}>
                        <button className="rounded-pill px-3 py-1 mt-1 btn-outline-orange">
                            Book
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
