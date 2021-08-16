import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (FormData, history) => async (dispatch) => {
    try {
        // log in 
        const { data } = await api.signIn(FormData);

        dispatch({type: AUTH, data});

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (FormData, history) => async (dispatch) => {
    try {
        // sign up
        const { data } = await api.signUp(FormData);

        dispatch({type: AUTH, data});
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};