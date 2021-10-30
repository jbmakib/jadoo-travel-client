import React from "react";

const ManageOrder = ({
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
        console.log(_id, e.target.value);
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
