import React, {useEffect, useState } from 'react';
import classes from "./SignUp.module.css";
import Title from "../../Components/UI/Title/Title";
import Input from "../../Components/UI/Input/Input";
import {emailRegExp, ENTER_EMAIL, ENTER_NAME,
    ENTER_PASSWORD, NOT_ERROR, WRONG_EMAIL, WRONG_NAME_LENGTH, WRONG_PASSWORD_LENGTH } from '../../Components/UI/Input/Validate';
import InputForAuth from "../../Components/UI/Input/InputForAuth";
import {Link} from "react-router-dom";


const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inAccount, setInAccount] = useState(false);
    const [emailError, setEmailError] = useState(' ');
    const [passwordError, setPasswordError] = useState(' ');
    const [nameError, setNameError] = useState(' ');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (nameError || emailError || passwordError) {
            setFormValid(false);

        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError])

    const handlerSubmit = (event: any) => {
        event.preventDefault();
        let user = {
            username: name,
            email: email,
            password: password,
            inAccount: inAccount,
        }
        localStorage.setItem(name, JSON.stringify(user));
        alert ("registration completed successfully");
        setName('');
        setEmail('');
        setPassword('');
    }

    const handlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName (e.target.value)

        if (e.target.value.length < 2 || e.target.value.length > 10 ) {
            setNameError(`${WRONG_NAME_LENGTH}`)
            if (!e.target.value) {
                setNameError(`${ENTER_NAME}`)
            }} else {
            setNameError(`${NOT_ERROR}`)
        }
    }

    const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail (e.target.value)

        if (!emailRegExp.test(String(e.target.value).toLowerCase())) {
            setEmailError(`${WRONG_EMAIL}`)
            if (!e.target.value) {
                setEmailError (`${ENTER_EMAIL}`)
            }
        } else {
            setEmailError(`${NOT_ERROR}`)
        }
    }

    const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword (e.target.value)

        if (e.target.value.length < 5 || e.target.value.length > 20 ) {
            setPasswordError(`${WRONG_PASSWORD_LENGTH}`)
            if (!e.target.value) {
                setPasswordError(`${ENTER_PASSWORD}`)
            }} else {
            setPasswordError(`${NOT_ERROR}`)
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper_left}>
                <Title>Sign Up</Title>
                <form className={classes.wrapper_low}>
                    <InputForAuth
                        onChange={e => handlerName(e)}
                        value={name}
                        name='Name'
                        type="text"
                        placeholder="Enter username..."
                        label="Имя пользователя"
                        error={nameError}
                    />
                    {nameError && <span className={classes.textError}>{nameError}</span>}
                    <InputForAuth
                        onChange={e => handlerEmail(e)}
                        value={email}
                        name='Email'
                        type="email"
                        placeholder="Enter your email..."
                        label="Email"
                        error={emailError}
                    />
                    {emailError && <span className={classes.textError}>{emailError}</span>}
                    <InputForAuth
                        onChange={e => handlerPassword(e)}
                        value={password}
                        name='Password'
                        type="password"
                        placeholder="Enter your password..."
                        label="Пароль"
                        error={passwordError}
                    />
                    {passwordError && <span className={classes.textError}>{passwordError}</span>}
                    <button className={classes.styleButton}
                        disabled={!formValid}
                        type="submit"
                        onClick={handlerSubmit}
                    >Submit</button>
                </form>
                <Link to='/logIn\'>You already have an account?</Link>
            </div>
            <div className={classes.wrapper_right}>
                <div className={classes.blockStyle}>
                    <img className={classes.imageStyle} src='/Sign Up _ LinkedIn (1).png' alt={''}/>
                </div>
            </div>
        </div>
    );
};

export default SignUp;