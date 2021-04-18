import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
    const usefulLinks = [
        { name: "Our Services", link: "#services" },
        { name: "Our Gallery", link: "#gallery" },
        { name: "Our Experts", link: "#experts" },
        { name: "Upcomming Events", link: "#upcoming-events" },
        { name: "Online Help", link: "#online-help" },
    ]
    const ourAddress = [
        { name: "203, Envato Labs, Behind Alis Steet, Melbourne, Australia.", link: "#google.com/map" },
        { name: "123, New Lenox Chicago, IL 60606", link: "#google.com/map" },

    ]
    const openingHours = [
        { name: "Mon - Tues : 6.00 am - 10.00 pm" },
        { name: "Wednes - Thurs : 8.00 am - 6.00 pm" },
        { name: "Fri : 3.00 pm - 8.00 pm" },
        { name: "Sun : Closed" },
    ]
    const services = [
        { name: "Mobile Repair", link: "#mobile-reapair" },
        { name: "Laptop Reapair", link: "#laptop-repair" },
        { name: "Computer Reapair", link: "#computer-repair" },
        { name: "IPad Reapair", link: "#ipad-repair" },
        { name: "Camera Reapair", link: "#camera-repair" },
        { name: "Printer Repair", link: "#printer-repair" },
    ]
    return (
        <footer className="footer-area clear-both bg-dark">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Useful Links"} menuItems={usefulLinks} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Opening Hours" menuItems={openingHours} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6 className="text-white">Subscribe Newsletter</h6>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="E-mail" />
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white pb-1">
                    <span className="text-muted">Copyright &copy; {(new Date()).getFullYear()}. All Rights Reserved</span>
                </div>
            </div>
        </footer>

    );
};

export default Footer;