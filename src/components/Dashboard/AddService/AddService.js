import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {

        const serviceData = {
            ...data,
            imageURL,
            date: new Date()
        }
        fetch('https://repair-master.herokuapp.com/add-service', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(result => alert('Service Added Successful.'))
    };

    const handleImageUpload = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.set('key', 'e6aaef241beb0fc2bef1b94101b16225')
        formData.append('image', image)

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => setImageURL(result.data.display_url))
            .catch(error => console.log(error))

    }

    const uploadImg = {
        padding: '10px 20px',
        backgroundColor: '#85D2D0',
        width: '200px',
        color: 'white',
        borderRadius: '5px',
        marginBottom: '10px',
        cursor: 'pointer'
    }
    return (
        <div>
            <h1 className="border-bottom mt-1 mb-3">ADD SERVICE</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5 rounded">
                <label>Service Title</label>
                <input className="form-control w-50 mb-2" {...register("serviceTitle", { required: true })} />
                <label>Description</label>
                <textarea rows="3" className="form-control w-50 mb-2" {...register("description", { required: true })} />
                <label>Uplod Image</label>
                <input id="img" className=" d-none form-control w-50" type="file" onChange={handleImageUpload} />
                <label htmlFor="img" className="d-block" style={uploadImg}>
                    <FontAwesomeIcon className="me-3" icon={faCloudUploadAlt} />
                    Upload Image
                </label>
                <input type="submit" className="btn btn-success" value="ADD SERVICE" />
            </form>
        </div>
    );
};

export default AddService;