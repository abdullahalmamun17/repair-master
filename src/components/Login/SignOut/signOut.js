import firebase from "firebase/app";
import "firebase/auth";

const googleSignOut = () => {
    return firebase.auth().signOut()
        .then(() => {

        })
        .catch((error) => {
            console.log(error);
        });
}

export default googleSignOut;