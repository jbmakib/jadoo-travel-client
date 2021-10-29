import React from "react";

const CarouselCard = ({ img, author, location, children }) => {
    return (
        <div className="card">
            <div className="position-relative">
                <span className="position-absolute top-0 start-0 translate-middle">
                    <img
                        src={img}
                        className="rounded-circle"
                        width="50"
                        height="50"
                        alt=""
                    />
                </span>
                <div className="card-body">
                    <p className="mb-3">{children}</p>
                    <p className="h5">{author}</p>
                    <p className="mb-0">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
