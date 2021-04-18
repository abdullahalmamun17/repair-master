import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://repair-master.herokuapp.com/services')
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