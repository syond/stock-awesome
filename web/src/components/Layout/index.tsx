import React from "react";

import "./styles.css";

import Nav from "../Nav";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

const Layout: React.FC = ({ children }) => {
    return (
        <div id="container">
            <div id="wrapper">
                {/* <Nav />
                <Header /> */}
                {children}
                {/* <Footer /> */}
            </div>
        </div>    
    );
}

export default Layout;
