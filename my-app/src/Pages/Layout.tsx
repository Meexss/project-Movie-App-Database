import React from 'react';
import {Outlet} from "react-router-dom";
import classes from './layout.module.css'
import Header from "../Components/Header/Header";

function App() {
  return (
      <div className={classes.wrapper}>
          <Header/>
          <div className={classes.wrapperOutlet}>
              <Outlet/>
          </div>

          Футер
      </div>
  )
}

export default App;
