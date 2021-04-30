import React from 'react';

const UserOrderList = ({ order }) => {
    console.log(order)

    const buttonColor = () => {
        if (order.status === 'pending') {
            return 'btn text-white btn-danger'
        }
        if (order.status === 'on going') {
            return 'btn text-white btn-primary'
        }
        if (order.status === 'done') {
            return 'btn btn-success'
        }
    }

    return (
        <div className="col-md-4 mb-4">
            <div class="card bg-light">
                <div className="d-flex justify-content-between p-2">
                    <img src={order.serviceDetail.imageURL} class="card-img-top" style={{ width: '50px' }} alt="..." />
                    <button className={buttonColor()} disabled>{order.status}</button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{order.serviceDetail.serviceTitle}</h5>
                    <p class="card-text">{order.service}</p>
                </div>
            </div>
        </div >
    );
};

export default UserOrderList;