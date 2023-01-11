import React from 'react';
import Title from "../../Components/UI/Title/Title";
import Input from "../../Components/UI/Input/Input";
import classes from "./Login.module.css";
import {Link} from "react-router-dom";

const LogIn = () => {
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
                <Input type='email' name='Email' style='475px'/>
                <Input type='password' name='Password' style='475px'/>
                <Link className={classes.forgotStyle} to='/'>Forgot password?</Link>
                {/*<Button style='486px'>Login</Button>*/}
                </form>
            </div>
            
        </div>
    );
};

export default LogIn;