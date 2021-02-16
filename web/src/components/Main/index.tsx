import React from "react";

const Main: React.FC = ({ children }) => {
    return (
        <div id="main-container">
            {children}
        </div>
    );
}

export default Main;
