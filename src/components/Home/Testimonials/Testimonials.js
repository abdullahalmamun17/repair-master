import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import profile from '../../../icons/profile.png';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])


    return (
        <section>
            <div className="container my-5 bg-light rounded text-center p-3">
                <h1 className="mb-5">What Our Customers Say</h1>
                <Carousel>
                    {
                        testimonials.map(testimonial => <Carousel.Item className="w-100">
                            <div className="d-flex align-items-center justify-content-center">
                                <div>
                                    <img src={testimonial.image || profile} style={{ borderRadius: '50%', width: '100px', marginBottom: '20px' }} alt="" />
                                    <p>{testimonial.description}</p>
                                    <h4>{testimonial.name}</h4>
                                    <h6>{testimonial.designation} , {testimonial.companyName}</h6>
                                </div>
                            </div>
                        </Carousel.Item>)
                    }
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;