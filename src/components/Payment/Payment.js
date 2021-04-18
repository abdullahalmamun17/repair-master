import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Payment = ({ handleOrderPlaced }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm handleOrderPlaced={handleOrderPlaced}></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;