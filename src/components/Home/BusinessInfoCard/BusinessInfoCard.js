import React from 'react';

const BusinessInfoCard = ({ businessInfo }) => {

    return (
        <div className={`col-lg-2 info-card-border bg-dark col-6 col-sm-6 col-md-4 ${businessInfo.background}`}>
            <div className="d-flex align-items-center px-3 py-5 text-white">
                <img src={businessInfo.img} alt="" className="img-fluid w-25 me-3" />
                <h6>{businessInfo.title}</h6>
            </div>
        </div>
    );
};

export default BusinessInfoCard;