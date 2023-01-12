import React from 'react';
import Layout from "./Pages/LayOUT/Layout";
import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import OpenCard from "./Pages/OpenCARD/OpenCard";
import OpenCategory from "./Pages/OpenCATEGORY/OpenCategory";
import LogIn from "./Pages/LogIN/LogIn";
import SignUp from "./Pages/SignUP/SignUp";
import BigActor from "./Pages/OpenActor/BigActor";
import './index.css'
import Error from "./Pages/Error/Error";
import store from "./Components/Redux/store";
import {Provider} from "react-redux";
import Favorite from "./Pages/Favorite/Favorite";


const App = () => {
    return (
        <Provider store={store}>
        <div className='wrapper'>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='card/:id' element={<OpenCard/>}/>
                    <Route path='actor/:id' element={<BigActor/>}/>
                    <Route path='category/:idCategory' element={<OpenCategory/>}/>
                    <Route path='logIn' element={<LogIn/>}/>
                    <Route path='SignUp' element={<SignUp/>}/>
                    <Route path='404' element={<Error/>}/>
                    <Route path='like' element={<Favorite/>}/>
                </Route>
            </Routes>
        </div>
        </Provider>
    );
};

export default App;