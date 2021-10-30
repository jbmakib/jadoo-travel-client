import React, { useEffect, useState } from "react";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`https://ancient-brook-62418.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => setAllOrders(data))
            .catch((err) => console.log(err.message));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container">
            <h2 className="text-center">
                All of the orders: {allOrders.length}
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Tour Name</th>
                        <th scope="col">Date Issued</th>
                        <th scope="col">Tour Starts</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map((order) => (
                        <ManageOrder key={order._id} order={order} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;
