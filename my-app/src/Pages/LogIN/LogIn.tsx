import React, {useEffect, useState} from 'react';
import Title from "../../Components/UI/Title/Title";
import Input from "../../Components/UI/Input/Input";
import classes from "./Login.module.css";
import {Link, useNavigate} from "react-router-dom";
import {emailRegExp, ENTER_EMAIL, ENTER_NAME,
    ENTER_PASSWORD, NOT_ERROR, WRONG_EMAIL, WRONG_NAME_LENGTH, WRONG_PASSWORD_LENGTH } from '../../Components/UI/Input/Validate';
import InputForAuth from "../../Components/UI/Input/InputForAuth";


const LogIn = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [nameError, setNameError] = useState(' ');
    let navigate = useNavigate();

    const login = (text: string) => {
        let keyName = 'active';
        localStorage.setItem(keyName, text);
    }

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }

    }, [emailError, passwordError])

    const handleSignIn = (e:any) => {

        e.preventDefault();
        let userInStorage:any = localStorage.getItem(name);
        let dataInStorage = JSON.parse(userInStorage);

        if (userInStorage == null) {
            alert ("Invalid username. Try again");
        } else if (name == dataInStorage.username && password == dataInStorage.password) {
            alert ("You are logged in");
            setName('');
            setPassword('');
            login(name)
            navigate('/');
        } else {
            alert ("Wrong password. Try again");
        }
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
            <div className={classes.wrapper_right}>
                <div className={classes.blockStyle}>
                    <img className={classes.imageStyle} src='/Saly-11.png' alt={''}/>
                </div>
            </div>
            <div className={classes.wrapper_left}>
                <Title>Login</Title>
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
                        onChange={e => handlerPassword(e)}
                        value={password}
                        name='Password'
                        type="password"
                        placeholder="Enter your password..."
                        label="Пароль"
                        error={passwordError}
                    />
                    {passwordError && <span className={classes.textError}>{passwordError}</span>}
                </form>
                <button className={classes.styleButton} onClick={handleSignIn} disabled={!formValid} type="submit">Enter</button>
            <Link className={classes.forgotStyle} to='/SignUp'>Create an account</Link>
            </div>
            
        </div>
    );
};

export default LogIn;