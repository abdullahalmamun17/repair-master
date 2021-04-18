import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://repair-master.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

    return (
        <div>
            <h1 className="border-bottom mb-5 mt-1">Services</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Service</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <ManageService service={service}></ManageService>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;