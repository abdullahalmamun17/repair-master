import { faStripe } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jwt_decode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import Payment from '../Payment/Payment';
import './ProceedOrder.css';

const ProceedOrder = () => {
    const [loggedInUser] = useContext(UserContext)
    const decoded = jwt_decode(sessionStorage.getItem('token'))
    const { serviceId } = useParams()
    const [billingDetails, setBillingDetails] = useState({})
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('https://repair-master.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleOnBlur = (event) => {
        setBillingDetails({
            ...billingDetails,
            [event.target.name]: event.target.value,
        })
    }

    const handleOrderPlaced = (payment) => {
        const serviceDetail = services.find(service => service._id === serviceId)

        payment.billing_details = { ...billingDetails }
        payment.billing_details.service = serviceDetail.serviceTitle

        const orderData = {
            ...billingDetails,
            paymentMethod: payment,
            serviceDetail,
            status: 'pending',
            date: new Date(),
            email: loggedInUser.email || decoded.email
        }

        fetch('https://repair-master.herokuapp.com/order-placed', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(result => alert('Order Placed Successful.'))
    }

    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <div className="w-50 mx-auto container p-5 form-div">
                <form className="w-75 mb-3">
                    <h3 className="text-center mb-3 border-bottom" style={{ color: 'tomato' }}>Placed Your Order</h3>
                    <label>Name</label>
                    <input type="text" onBlur={handleOnBlur} className="form-control mb-2" required name="name" />
                    <label>Email</label>
                    <input type="text" onBlur={handleOnBlur} className="form-control mb-2" required name="billingEmail" />
                    <label>Service Description</label>
                    <textarea rows="2" type="text" onBlur={handleOnBlur} className="form-control mb-2" required name="service" />
                </form>
                <h6 className="text-muted m-0" style={{ fontSize: '12px' }}>Pay with</h6>
                <FontAwesomeIcon icon={faStripe} style={{ color: '#4379FF', fontSize: '50px' }} />
                <Payment handleOrderPlaced={handleOrderPlaced}></Payment>
            </div>
        </div>
    );
};

export default ProceedOrder;