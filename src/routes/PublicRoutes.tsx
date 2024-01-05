import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Login from '../pages/Login';
import { ROUTESMAP } from './routeMapper';
import Login from "../pages/Login";
import Register from "../pages/Register";
// import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
// import AccountDetails from "../pages/AccountDetails";
import Settings from "../pages/Settings";
import DeleteAccount from "../pages/DeleteAccount";
import Projects from "../pages/Projects";
import Logout from "../pages/Logout";
import Experiments from "../pages/Experiments";



const PublicRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path={ROUTESMAP.LOGIN} element={<Login />} />
        <Route path={ROUTESMAP.REGISTER} element={<Register />} />
        <Route path={ROUTESMAP.DELETEACCOUNT} element={<DeleteAccount />} />
        <Route path={ROUTESMAP.SETTINGS} element={<Settings />} />
        <Route path={ROUTESMAP.LOGOUT} element={<Logout />} />
        <Route path={ROUTESMAP.PROJECTS} element={<Projects />} />
        <Route path={ROUTESMAP.EXPERIMENTS} element={<Experiments />} />
        <Route path={ROUTESMAP.ABOUT} element={<About />} />
        <Route path={ROUTESMAP.CONTACT} element={<Contact />} />
        <Route path={ROUTESMAP.ABOUT} element={<About />} />
      </Route>
      {/* <Route>
          <Route path={ROUTESMAP.LOGIN} element={<Login />} />
        </Route> */}
    </Routes>
  );
}

export default PublicRouter