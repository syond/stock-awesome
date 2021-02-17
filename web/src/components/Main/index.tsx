import React from "react";

import "./styles.css";

const Main: React.FC = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    );
}

export default Main;
