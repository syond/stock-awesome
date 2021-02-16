import React from "react";

import Nav from "../Nav";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

const Layout: React.FC = () => {
    return (
        <div id="container">
            <div id="wrapper">
                {/* <Nav />
                <Header /> */}
                <Main />
                {/* <Footer /> */}
            </div>
        </div>    
    );
}

export default Layout;
