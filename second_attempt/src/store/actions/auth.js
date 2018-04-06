import {TRY_AUTH} from "./actionTypes.js";

export const tryAuth = (authData) => {
    return {
        type : TRY_AUTH,
        authData : authData
    };
};