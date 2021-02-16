import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div id="container">
            <Link to="/">Go Back to Home</Link>

            <img src="" alt="page not found illustration" />
            
            <h3>Error 404 - Page Not Found</h3>
        </div>
    );
}

export default PageNotFound;