import React from 'react';

const Feature = ({ feature }) => {

    return (
        <div className="col-md-4">
            <div class="card">
                <img src={feature.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-tomato">{feature.title}</h5>
                    <p class="card-text">{feature.description}</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;