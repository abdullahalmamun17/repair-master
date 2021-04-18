import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Admin from '../Admin/Admin';

const AdminPanel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [adminPanel, setAdminPanel] = useState([])

    useEffect(() => {
        fetch('https://repair-master.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setAdminPanel(data))
    }, [adminPanel])

    const onSubmit = (data, e) => {
        fetch('https://repair-master.herokuapp.com/add-admin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => alert('admin added.'))

        e.target.reset();
    }

    return (
        <div>
            <h1 className="border-bottom mt-1 text-danger">ADMIN PANEL</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input className="form-control w-50 mb-2" type="email" {...register("email", { required: true })} />
                <input type="submit" className="btn btn-primary" value="ADD ADMIN" />
            </form>
            <div className="mt-5 bg-light p-3 rounded">
                <h2 className="border-bottom">ADMIN LIST</h2>
                {
                    adminPanel.map(admin => <Admin admin={admin}></Admin>)
                }
            </div>
        </div>
    );
};

export default AdminPanel;