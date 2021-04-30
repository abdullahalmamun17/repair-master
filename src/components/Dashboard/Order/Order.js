import React from 'react';

const Order = ({ order }) => {
    const { name, email, service, billingEmail } = order
    const { brand } = order.paymentMethod.card


    const handleOnChange = (event) => {
        const status = event.target.value

        fetch(`https://repair-master.herokuapp.com/order-updated/${order._id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(result => alert('Status modified..'))
    }


    return (
        <tr>
            <td>{name}</td>
            <td>{billingEmail || email}</td>
            <td>{service}</td>
            <td style={{ width: '100px' }}>{brand}</td>
            <td style={{ width: '150px' }}>
                <select class="form-select border-0" onChange={handleOnChange}>
                    <option selected disabled>{order.status}</option>
                    <option value="pending">Pending</option>
                    <option value="on going">On Going</option>
                    <option value="done">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default Order;