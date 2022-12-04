import React from 'react';
import Layout from "./Pages/Layout";
import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import OpenCard from "./Pages/OpenCard";
import OpenCategory from "./Pages/OpenCategory";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import BigActor from "./Components/BigActor/BigActor";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path='card/:id' element={<OpenCard/>}/>
                <Route path='actor/:id' element={<BigActor/>}/>
                <Route path='category/:idCategory' element={<OpenCategory/>}/>
                <Route path='logIn' element={<LogIn/>}/>
                <Route path='SignUp' element={<SignUp/>}/>

            </Route>
        </Routes>
    );
};

export default App;