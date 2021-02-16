import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import PageNotFound from "./pages/PageNotFound";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
