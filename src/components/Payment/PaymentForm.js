import {
    CardCvcElement,
    CardExpiryElement, CardNumberElement, useElements, useStripe
} from "@stripe/react-stripe-js";
import React, { useMemo } from "react";


const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const PaymentForm = ({ handleOrderPlaced }) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });

        handleOrderPlaced(payload.paymentMethod)
    };



    return (
        <form onSubmit={handleSubmit} className="w-75">
            <label>Card number</label>
            <CardNumberElement
                options={options}
                className="form-control mb-1"
            />
            <div className="d-flex">
                <div className="w-50 me-3">
                    <label>Expiration date</label>
                    <CardExpiryElement
                        options={options}
                        className="form-control w-100 mb-1"
                    />
                </div>
                <div className="w-50">
                    <label>CVC</label>
                    <CardCvcElement
                        options={options}
                        className="form-control mb-3"
                    />
                </div>
            </div>
            <button className="btn btn-primary" type="submit" disabled={!stripe}>
                Proceed to Pay
            </button>
        </form>
    );
};

export default PaymentForm;
