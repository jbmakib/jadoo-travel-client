import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data))
            .catch((err) => console.log(err.message));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container">
            <h2 className="text-center">
                All of your orders: {myOrders.length}
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tour Name</th>
                        <th scope="col">Starts</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {myOrders.map((order) => (
                        <MyOrder key={order._id} order={order} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;
