import React from 'react';
import Layout from "./Pages/Layout";
import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import OpenCard from "./Pages/OpenCard";
import OpenCategory from "./Pages/OpenCategory";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path='card/:id' element={<OpenCard/>}/>
                <Route path='category/:idCategory' element={<OpenCategory/>}/>
            </Route>
        </Routes>
    );
};

export default App;