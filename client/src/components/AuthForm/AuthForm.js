import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useCreateUserMutation, useGetUserMutation } from '../../services/user';
import { AuthContext } from '../../context/AuthContext';
import style from './style.module.scss';

function AuthForm({ isRegistration }) {
    const [createUser, { isLoading: isRegistrationLoading, isSuccess: isRegistrationSuccess }] =
        useCreateUserMutation();
    const [getUser, { isSuccess: isAuthSuccess }] = useGetUserMutation();

    const [value, setValue] = useState({ role: 1 });
    const [role, setRole] = useState(1);

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthSuccess) {
            login();
        }
    }, [isAuthSuccess]);

    async function sendRequest() {
        try {
            console.log(value);
            let response = isRegistration ? await createUser(value) : await getUser(value);

            if (response.data) {
                navigate(isRegistration ? '/auth' : '/');
            }
        } catch (error) {
            console.error(error);
        }
    }
    function handleChange(event) {
        if (event.target.name === 'role') {
            setRole(event.target.value);
        }

        setValue({
            ...value,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <div className={style.wrapper}>

            <div className={style.loginForm}>
                {isRegistration ? <h1>Sign Up</h1> : <h1>Login</h1>}

                <div className={style.inps}>
                    <TextField onChange={handleChange} name="email" label="Your email" variant="outlined" />
                    <TextField onChange={handleChange} name="pwd" label="Your password" variant="outlined" />
                    {isRegistration && (
                        <>
                            <TextField onChange={handleChange} name="name" label="Your name" variant="outlined" />
                            <TextField onChange={handleChange} name="surname" label="Your surname" variant="outlined" />
                            <FormControl>
                                <InputLabel>Role</InputLabel>
                                <Select name="role" value={role} label="Role" onChange={handleChange}>
                                    <MenuItem value={1}>Student</MenuItem>
                                    <MenuItem value={2}>Teacher</MenuItem>
                                </Select>
                            </FormControl>
                        </>
                    )}
                </div>

                <div onClick={sendRequest} className={style.btn}>
                    {isRegistration ? 'Create User' : 'Login'}
                </div>
            </div>

            <div className={style.image}></div>

        </div>
    );
}

export default AuthForm