import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwt_decode from 'jwt-decode';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import image from '../../../icons/profile.png';
import googleSignOut from '../../Login/SignOut/signOut';



const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const jwtDecode = () => {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token');
            const decoded = jwt_decode(token);
            return decoded
        }
    }

    const handleSignout = () => {
        googleSignOut()
            .then(() => {
                sessionStorage.removeItem('token')
                setLoggedInUser({})
            })

    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link me-3 active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-3 text-dark" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-3 text-dark" href="#service">Service</a>
                        </li>
                        {
                            (loggedInUser?.email || jwtDecode()?.email) && <li class="nav-item">
                                <Link className="nav-link me-3 text-dark" to="/dashboard">Dashboard</Link>
                            </li>
                        }
                        <li class="nav-item">
                            <a class="nav-link me-3 text-dark" href="#review">Review</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-3 text-dark" href="#contact">Contact Us</a>
                        </li>
                        {
                            (loggedInUser.email || sessionStorage.getItem('token'))
                                ? <li class="nav-item dropdown me-5">
                                    <img src={loggedInUser.photoURL || jwtDecode().picture || image} style={{ borderRadius: '50%', width: '50px', marginRight: '20px' }} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" alt="" />
                                    <ul style={{ minWidth: '0' }} class="dropdown-menu border-0" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#profile">My Profile</a></li>
                                        <li><a class="dropdown-item" href="#setting">Setting</a></li>
                                        <li><a onClick={handleSignout} class="dropdown-item" href="#profile">
                                            <FontAwesomeIcon icon={faSignOutAlt} /> Signout</a></li>
                                    </ul>
                                </li>
                                : <Link to='/login' className="btn btn-primary">Login</Link>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;