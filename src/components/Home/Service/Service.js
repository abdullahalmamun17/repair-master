import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    return (
        <div className="col-md-3 mb-3">
            <div class="card">
                <img src={service.imageURL} class="card-img-top w-50 mx-auto mt-1" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-tomato">{service.serviceTitle}</h5>
                    <p class="card-text text-justify">{service.description}</p>
                    <div className="card-footer d-flex border-0 justify-content-between align-items-center">
                        <Link to={`/proceed-order/${service._id}`} class="btn btn-primary">Get Service</Link>
                        <h6>
                            <FontAwesomeIcon icon={faDollarSign} />
                            500
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;