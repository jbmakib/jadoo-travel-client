import React from "react";
import deleteOrder from "../../../utilities/deleteOrder";

const MyOrder = ({
    order: {
        _id,
        start,
        status,
        service: { name },
    },
    action: { myOrders, setMyOrders },
}) => {
    const handleDeleteOrder = () => {
        deleteOrder(_id, myOrders, setMyOrders);
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{start} (YYYY-MM-DD)</td>
            <td>{status}</td>
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

export default MyOrder;
