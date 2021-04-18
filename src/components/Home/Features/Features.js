import React from 'react';
import featuresData from '../../../data/featuresData/featuresData';
import Feature from '../Feature/Feature';

const Features = () => {
    return (
        <section>
            <div className="text-center my-5">
                <h2 className="text-uppercase">Welcome To <span className="text-tomato">Repair Master</span></h2>
                <h6 className="text-muted">We provide services for multiple customers in various industries and segments</h6>
            </div>
            <div className="container">
                <div className="row">
                    {
                        featuresData.map(featureData => <Feature feature={featureData}></Feature>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;