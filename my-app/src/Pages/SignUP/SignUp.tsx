import React from 'react';
import classes from "./SignUp.module.css";
import Title from "../../Components/UI/Title/Title";
import Input from "../../Components/UI/Input/Input";

const SignUp = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper_left}>
                <Title>Sign Up</Title>
                <form className={classes.wrapper_low}>
                    <Input type='email' name='Email' style='475px'/>
                    <Input type='text' name='Name' style='475px'/>
                    <Input type='password' name='Password' style='475px'/>
                    <Input type='password' name='Check Password' style='475px'/>
                    {/*<Button style='486px'>Send</Button>*/}
                </form>
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