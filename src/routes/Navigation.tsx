import { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import {routes} from "./routes"


function Navigation() {
  return (
    <Suspense fallback={<span className="loading">Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />
            <ul>
              {routes.map((item) => {
                return(
                  <li key={item.to}>
                  <NavLink to={item.to} className={ ({isActive}) => isActive ? 'nav-active' : "" }>{item.name}</NavLink>
                </li>
                )
              })}
            </ul>
          </nav>
          <Routes>
            {routes.map((item) => {
              return(
                <Route key={item.path} path={item.path} element={<item.Component/>}></Route>
              )
            })}
              <Route path="/*" element={<Navigate to={routes[0].to} replace/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default Navigation;
