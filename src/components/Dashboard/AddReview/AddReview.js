import jwt_decode from "jwt-decode";
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext)


    const token = sessionStorage.getItem('token')
    const decoded = jwt_decode(token);

    const onSubmit = (data) => {
        fetch('https://repair-master.herokuapp.com/add-review', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                ...data,
                image: loggedInUser.photoURL || decoded.picture
            })
        })
            .then(res => res.json())
            .then(result => alert('review successful.'))
    }

    return (
        <div>
            <h1 className="mt-1 border-bottom mb-3" style={{ color: 'tomato' }}>Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light rounded p-5">
                <label>Name</label>
                <input placeholder="Enter Your Name" className="form-control w-50 mb-2" {...register("name", { required: true })} />
                <label>Company Name</label>
                <input placeholder="Company" className="form-control w-50 mb-2" {...register("companyName", { required: true })} />
                <label>Designation</label>
                <input placeholder="Designation" className="form-control w-50 mb-2" {...register("designation", { required: true })} />
                <label>Description</label>
                <textarea placeholder="Write something abouts us" rows="3" className="form-control w-50 mb-2" {...register("description", { required: true })} />
                <input type="submit" className="btn btn-primary" value="ADD REVIEW" />
            </form>
        </div>
    );
};

export default AddReview;