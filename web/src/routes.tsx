import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={App} />
        </BrowserRouter>
    );
}

export default Routes;
