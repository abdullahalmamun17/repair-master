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


const AdminUpdate = ({ modalIsOpen, closeModal, id, email }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://repair-master.herokuapp.com/admin/update/' + id, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(result => {
                alert('Admin Modified Successful....')
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
                    <h2 className="mb-4">UPDATE ADMIN</h2>
                    <input className="form-control mb-3" defaultValue={email} {...register("email", { required: true })} placeholder="Enter Email" type="email" />
                    <div className="d-flex justify-content-end">
                        <button onClick={closeModal} className="btn btn-secondary me-2">Close</button>
                        <input type="submit" className="btn btn-success" value="UPDATE ADMIN" />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AdminUpdate;