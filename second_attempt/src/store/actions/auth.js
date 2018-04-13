import { TRY_AUTH, AUTH_SET_TOKEN } from "./actionTypes.js";
import { ui_start_loading, ui_stop_loading } from "./index.js";

import startTabs from "../../screens/Main Tabs/startMainTabs.js";
// "./../Main Tabs/startMainTabs.js";

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    dispatch(ui_start_loading());
    const apiKey = "AIzaSyBewTKINwgHy24qcOmHj3W1pUPJxijOxno";
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
      apiKey;
    if (authMode === "signup") {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
        apiKey;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .catch(err => {
        console.log("Authentication error ", err);
        alert("Unable to authenticate please try again.");
        dispatch(ui_stop_loading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        dispatch(ui_stop_loading());
        if (!parsedRes.idToken) {
          alert("Unable to authenticate");
        }else {
            dispatch(authSetToken(parsedRes.idToken));
          startTabs();
        }
        console.log("Parsed response ", parsedRes);
      });
  };
};

export const authSetToken = token => {
    return {
        type : AUTH_SET_TOKEN,
        token : token
    };
};

export const authGetToken = () => {
    return (dispatch, getState) => {
        const promise = new Promise((resolve,reject)=>{
            const token = getState().auth.token;
            if(!token){
                reject();
            }
            else {
                resolve(token);
            }
        });
        return promise;
    };
};