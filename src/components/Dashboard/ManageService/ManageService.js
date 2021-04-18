import React, { useState } from 'react';
import ServiceEditForm from '../ServiceEditForm/ServiceEditForm';

const ManageService = ({ service }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const deleteService = () => {
        fetch('http://localhost:5000/service/delete/' + service._id, {
            method: 'DELETE',
        })
            .then(result => alert('Service Deleted...'))

    }

    return (
        <tr>
            <td>{service.serviceTitle}</td>
            <td>{service.description}</td>
            <td>
                <div className="d-flex">
                    <button className="btn btn-warning me-3" onClick={openModal}>Edit</button>
                    <button className="btn btn-danger" onClick={deleteService}>Delete</button>
                    <ServiceEditForm modalIsOpen={modalIsOpen} closeModal={closeModal} id={service._id}></ServiceEditForm>
                </div>
            </td>
        </tr>
    );
};

export default ManageService;