import React from "react";

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
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/order/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingUsers = myOrders.filter(
                            (user) => user._id !== _id
                        );
                        setMyOrders(remainingUsers);
                    }
                });
        }
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
