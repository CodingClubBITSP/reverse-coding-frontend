import "./Login.css"
import {Link} from "react-router-dom"
import React from "react";
import { GoogleLogin } from 'react-google-login';

//import { post } from 'utils/sdk';
import { useCallback, useContext } from 'react';
import axios from 'axios';

const Login = (props) => {
    const UserContext = React.createContext();
    //const { setUser } = useContext(UserContext);

    const handleSuccessfulLogin = useCallback(
      data => {
        //setUser(data);
        localStorage.clear();
        localStorage.setItem("email", data["email"]);
        localStorage.setItem("name", data["name"]);
        window.location.reload(false);
      }
    );

    const handleLoginError = useCallback(
      data => {
        // props.error = data["msg"]
        localStorage.setItem("error", data["msg"]);
        window.location.reload(false);
      }
    )

    const validateTokenAndObtainSession = ({ data, idToken }) => {
        const headers = {
          'Authorization': idToken,
          'Content-Type': 'application/json'
        };
      
        const url = "https://reverse-coding-cc.herokuapp.com" + '/users/register/';
        axios.post(url, data, { headers })
            .then(res => {
                console.log(res.data);
                if (res.status == 200){
                  handleSuccessfulLogin(res.data);
                } else {
                  handleLoginError(res.data)
                }
            });
    };

    const onGoogleLoginSuccess = useCallback(
        response => {
          const idToken = response.tokenId;
          const data = {
            email: response.profileObj.email,
            first_name: response.profileObj.givenName,
            last_name: response.profileObj.familyName
          };
      
          validateTokenAndObtainSession({ data, idToken })
        },
    );
     
    var error = null;
    if (localStorage.getItem("error") == null) {
      error = null 
    } else {
      error = <h1 style={{ color:"white" }}>{localStorage.getItem("error")}</h1>
    }

    return (localStorage.getItem("email") != null ) ? (<h1 style={{ color: "white" }}>Hey, { localStorage.getItem("name") }</h1>) : (
        <div>
          <div>
            {error}
          </div>
          <GoogleLogin
            clientId="683696949814-gke1pa3fbb2qo6nnddpf5tghh0aimuvf.apps.googleusercontent.com"  // your Google app client ID
            buttonText="Sign in with BITS Email"
            onSuccess={onGoogleLoginSuccess} // perform your user logic here
            //onFailure={onGoogleLoginFailure} // handle errors here
          />
        </div>
    );
}   

export default Login;