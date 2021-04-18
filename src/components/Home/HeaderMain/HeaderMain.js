import React from 'react';
import mobileImage from '../../../images/mobile.jpg';

const HeaderMain = () => {
    return (
        <main className="container-fluid my-4">
            <div className="row align-items-center">
                <div className="col-md-4 offset-md-1 mb-3">
                    <h1>We Always Provide You</h1>
                    <h6>Best Service for Electronic Product Repairing</h6>
                    <button className="btn btn-primary">Discover More</button>
                </div>
                <div className="col-md-6 col-12 col-sm-12">
                    <img src={mobileImage} alt="" className="img-fluid rounded" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;