import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./../assets/css/App.css";
import React from "react";
import { HashRouter } from "react-router-dom";

import Routes from "./Routes";

import Logo from "../components/template/logo/Logo";
import Nav from "../components/template/nav/Nav";
import Footer from "../components/template/footer/Footer";

export default props => (
  <HashRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </HashRouter>
);
