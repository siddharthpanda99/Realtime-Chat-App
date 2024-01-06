import React from 'react';
import Home from '../pages/Home';
import Contact from "../pages/Contact";
import About from "../pages/About";
import { Routes, Route } from "react-router-dom";
import AccountDetails from "../pages/AccountDetails";
import Settings from "../pages/Settings";
import DeleteAccount from "../pages/DeleteAccount";
import Projects from "../pages/Projects";
import Logout from '../pages/Logout';
import Experiments from "../pages/Experiments";
// import Login from '../pages/Login';
import { useUserContext } from '../hooks/useUserContext';
import { ROUTESMAP } from './routeMapper';
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes = () => {
  const {user} = useUserContext();
  return user.loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

const PrivateRouter = () => {
  return (
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={ROUTESMAP.HOME} element={<Home />} />
            <Route
              path={ROUTESMAP.ACCOUNTDETAILS}
              element={<AccountDetails />}
            />
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

export default PrivateRouter