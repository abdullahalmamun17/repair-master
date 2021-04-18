import jwt_decode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Order from '../Order/Order';
import UserOrderList from '../UserOrderList/UserOrderList';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    const [loggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    const decoded = jwt_decode(sessionStorage.getItem('token'));



    useEffect(() => {
        const email = loggedInUser.email || decoded.email

        fetch('http://localhost:5000/orders-list', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])

    useEffect(() => {
        const email = loggedInUser.email || decoded.email

        fetch('http://localhost:5000/is-admin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(result => setIsAdmin(result))
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center my-2">
                <h4 className="border-bottom">ORDER LIST</h4>
                <img src={decoded.picture} className="img-fluid" style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" />
            </div>
            {
                isAdmin ?
                    <table class="table bg-light table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service Description</th>
                                <th scope="col">Pay with</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderList.map(order => <Order order={order}></Order>)
                            }
                        </tbody>
                    </table>
                    : <div className="row">
                        {
                            orderList.map(order => <UserOrderList order={order}></UserOrderList>)
                        }
                    </div>
            }

        </div>
    );
};

export default OrderList;