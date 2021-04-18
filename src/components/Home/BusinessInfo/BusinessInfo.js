import React from 'react';
import businessData from '../../../data/businessData/businessData';
import BusinessInfoCard from '../BusinessInfoCard/BusinessInfoCard';

const BusinessInfo = () => {

    return (
        <section className="container-fluid">
            <div className="row">
                {
                    businessData.map(businessInfo => <BusinessInfoCard businessInfo={businessInfo}></BusinessInfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;