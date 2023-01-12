import React, {useEffect, useState} from 'react';
import classes from './Header.module.css'
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import SearchBlock from "../SearchBlock/SearchBlock";
import {SearchDataType} from "../../Types";
import {Link,} from 'react-router-dom';

const Header = () => {

    const [click, setClick] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const [search, setSearch] = useState<SearchDataType[]>([])

    const isClicked = () => {
        click
            ? setClick(false)
            : setClick(true)
    }
    useEffect(() => {
   fetch(`https://imdb-api.com/en/API/SearchAll/k_53o2jbzt/${text}`)
        .then(response => response.json())
       .then(data => setSearch(data.results))
    }, [text.length > 3]);

    console.log(localStorage.getItem('active'))
    return (
        <div className={classes.wrapper}>

            <div className={classes.wrapperLogo}>
                <Link className={classes.logo_wrapper} to='/'>
                <img className={classes.logo_img} src='/tv.png' alt='logo'/>
                <p className={classes.logo_title}>MovieBox</p>
                </Link>
            </div>
            <div className={classes.inputwrapper}>
                <input
                    type='text'
                    placeholder='What do you want to watch?'
                    className={classes.styleInput}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {text.length > 0 && <span className={classes.delete} onClick={() => setText('')}>X</span>}
                {text.length > 3 &&
                    <div>
                        <SearchBlock item={search}/>
                    </div>
                }
            </div>
            <div className={classes.wrapper_burger}>

                {localStorage.getItem('active') ? <span className={classes.signIn}>User - {localStorage.getItem('active')}</span> : <Link className={classes.signIn} to='/logIn'>Log In</Link>}
                <div className={click ? classes.burger__active : classes.burger} onClick={() => isClicked()}>
                    <BurgerMenu type={click} setType={setClick}/>
                </div>
            </div>
        </div>
    );
};

export default Header;