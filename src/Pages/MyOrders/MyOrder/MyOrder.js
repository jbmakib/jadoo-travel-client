import React from "react";

const MyOrder = ({
    order: {
        start,
        status,
        service: { name },
    },
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{start} (YYYY-MM-DD)</td>
            <td>{status}</td>
        </tr>
    );
};

export default MyOrder;
