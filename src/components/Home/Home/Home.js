import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="font-poppins">
            <Header></Header>
            <Features></Features>
            <Services></Services>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;