import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useScript } from "./useScript";
import jwt_deocde from "jwt-decode";
import { useDispatch } from "react-redux";

const GoogleAuth = () => {
  const googlebuttonref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

	const onGoogleSignIn = async (googleUser) => {
    let token = googleUser.credential;
    let result = jwt_deocde(token);

    try {
      dispatch({type: 'AUTH', data: {token, result} });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

	 useScript("https://accounts.google.com/gsi/client", () => {
     window.google.accounts.id.initialize({
      client_id: "158734916124-leoo65dfnk735cfmd9kalaiidua54670.apps.googleusercontent.com",
      callback: onGoogleSignIn,
      auto_select: false,
    });

     window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "small",
    });
  });

	return (
    <div ref={googlebuttonref}></div>
	);
}

export default GoogleAuth;