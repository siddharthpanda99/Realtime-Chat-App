import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Login from '../pages/Login';
import { ROUTESMAP } from './routeMapper';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
// import Home from "../pages/Home";



const PublicRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path={ROUTESMAP.LOGIN} element={<Login />} />
        <Route path={ROUTESMAP.REGISTER} element={<Register />} />
      </Route>
    </Routes>
  );
}

export default PublicRouter