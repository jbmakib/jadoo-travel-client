import axios from "axios";
import React from "react";

const ManageOrder = ({
    setAllOrders,
    order: {
        _id,
        name,
        start,
        issued,
        status,
        service: { name: serviceName },
    },
}) => {
    const handleChange = (e) => {
        const status = e.target.value;
        axios
            .put(`http://localhost:5000/order/${_id}`, { status })
            .then((res) => {
                if (res.data.result.modifiedCount) {
                    alert("Status updated successfully\nUpdating UI");
                    setAllOrders(res.data.orders);
                }
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{serviceName}</td>
            <td>{issued}</td>
            <td>{start}</td>
            <td>{status}</td>
            <td>
                <select defaultValue={status} onChange={handleChange}>
                    <option value="Decline">Decline</option>
                    <option value="Pending">Pending</option>
                    <option value="Approve">Approve</option>
                </select>
            </td>
        </tr>
    );
};

export default ManageOrder;
