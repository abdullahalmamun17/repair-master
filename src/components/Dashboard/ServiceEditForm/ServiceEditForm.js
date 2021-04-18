import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px'
    }
};

Modal.setAppElement('#root')

const ServiceEditForm = ({ modalIsOpen, closeModal, id }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://repair-master.herokuapp.com/service/edit/' + id, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(result => {
                alert('Service Modified Successful....')
                closeModal()
            })
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="mb-4">EDIT SERVICE</h2>
                    <input className="form-control mb-3" {...register("serviceTitle", { required: true })} placeholder="Service Name" />
                    <textarea className="form-control mb-3" {...register("description", { required: true })} placeholder="Description" rows="3" />
                    <div className="d-flex justify-content-end">
                        <button onClick={closeModal} className="btn btn-secondary me-2">Close</button>
                        <input type="submit" className="btn btn-success" />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ServiceEditForm;