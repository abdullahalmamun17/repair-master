import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <h1 className="text-center my-5">Our Services</h1>
            <div className="container">
                <div className="row">
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;