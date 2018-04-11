import {UI_START_LOADING, UI_STOP_LOADING} from "./actionTypes.js";

export const ui_start_loading = () => {
    return{
         type : UI_START_LOADING,

    };    
};

export const ui_stop_loading = () => {
    return{
         type : UI_STOP_LOADING,
         
    };    
};