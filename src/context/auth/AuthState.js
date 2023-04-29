import React, { useReducer } from 'react';
import authReducer from './authReducer';
import AuthContext from './authContext';
import { endPoints } from "../../utils/urls";
import axios from 'axios'
import { 
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const AuthState = props => {
    const initialState = {
        token: typeof window !== "undefined" && localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        loading: true,
        error: null
    }

    
    const { createAccountUrl, loginUrl, googleLoginUrl } = endPoints;

    const [state, dispatch] = useReducer(authReducer, initialState);

    //register user
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(createAccountUrl, formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data
            })
        }
    }

    //login user
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(loginUrl, formData, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data
            })
        }
    }

    //logout
    const logout = () => dispatch({type: LOGOUT});

    //clear errors
    const clearErrors = () => dispatch({type: CLEAR_ERRORS});

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                login,
                logout,
                clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;