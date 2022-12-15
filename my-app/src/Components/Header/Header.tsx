import React, {useState} from 'react';
import {Link} from "react-router-dom";
import classes from './Header.module.css'
import Input from "../UI/Input/Input";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {

    const [click, setClick] = useState<boolean>(false)
    const isClicked = () => {
        click
            ? setClick(false)
            : setClick(true)
    }

    console.log(click)

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapperLogo}>
                <Link className={classes.logo_wrapper} to='/'>
                <img className={classes.logo_img} src='/tv.png' alt='logo'/>
                <p className={classes.logo_title}>MovieBox</p>
                </Link>
            </div>
            <div>
                <Input
                    type='text'
                    name='What do you want to watch?'
                    style='520px'
                />
            </div>
            <div className={classes.wrapper_burger}>

                <Link className={classes.signIn} to='/logIn'>Log In</Link>
                <div className={click ? classes.burger__active : classes.burger} onClick={() => isClicked()}>
                    <BurgerMenu type={click} setType={setClick}/>
                </div>
                <Link className={classes.signIn} to='/SignUp'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;