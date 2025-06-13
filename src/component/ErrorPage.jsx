import {Link} from "react-router-dom";

function ErrorPage(){
    return(
        <div>
            <h1>Oh no! an error has occurred.</h1>
            <Link to="/">
                <button>
                    Go back to the home page.
                </button>
            </Link>
        </div>
    )
}

export default ErrorPage;
