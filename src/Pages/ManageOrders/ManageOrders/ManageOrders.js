import React from "react";

const ManageOrders = () => {
    return (
        <div className="container">
            <h2 className="text-center">All of your orders:</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tour Name</th>
                        <th scope="col">Starts</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {myOrders.map((order) => (
                        <MyOrder key={order._id} order={order} />
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;
