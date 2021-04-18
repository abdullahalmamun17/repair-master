import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from "../../../App";
import repairImg from '../../../icons/smartphone-servicing.png';
import Navbar from '../../Home/Navbar/Navbar';
import firebaseConfig from './firebase.config';


!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setLoggedUser(user)
                userToken()
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    const userToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken)
            history.replace(from)
        }).catch(function (error) {

        });
    }


    return (
        <section>
            <Navbar></Navbar>
            <div className="container bg-light p-5 mt-5" style={{ borderRadius: '10px' }}>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={repairImg} className="img-fluid me-4" style={{ width: '50px' }} alt="" />
                    <h2>Repair Master</h2>
                </div>
                <div className="text-center mt-5">
                    <h4>Login With</h4>
                    <button onClick={googleSignIn} className="btn btn-outline-secondary btn-lg mt-3" style={{ borderRadius: '30px', color: 'tomato' }}>
                        <FontAwesomeIcon icon={faGoogle} className="me-5" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;