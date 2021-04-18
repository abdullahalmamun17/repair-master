import React, { useState } from 'react';
import AdminUpdate from '../AdminUpdate/AdminUpdate';

const Admin = ({ admin }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const deleteAdmin = () => {
        fetch('http://localhost:5000/admin/delete/' + admin._id, {
            method: 'DELETE',
        })
            .then(result => alert('Admin Deleted...'))

    }

    return (
        <div className="d-flex justify-content-between border-bottom align-items-center py-3">
            <h6>{admin.email}</h6>
            <div>
                <button onClick={openModal} className="btn btn-warning me-2">EDIT</button>
                <button onClick={deleteAdmin} className="btn btn-danger me-3">DELETE</button>
                <AdminUpdate modalIsOpen={modalIsOpen} closeModal={closeModal} id={admin._id} email={admin.email}></AdminUpdate>
            </div>
        </div>
    );
};

export default Admin;