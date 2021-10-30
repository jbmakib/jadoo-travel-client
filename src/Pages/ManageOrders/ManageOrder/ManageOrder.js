import axios from "axios";
import React from "react";
import deleteOrder from "../../../utilities/deleteOrder";

const ManageOrder = ({
    action: { allOrders, setAllOrders },
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

    // delete order
    const handleDeleteOrder = () => {
        deleteOrder(_id, allOrders, setAllOrders);
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
            <td>
                <button
                    className="btn btn-outline-danger"
                    onClick={handleDeleteOrder}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageOrder;
