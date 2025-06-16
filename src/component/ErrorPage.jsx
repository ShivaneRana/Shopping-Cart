import { Link, useRouteError } from "react-router-dom";
import errorIcon from "../assets/images/error.png";
import style from "../style/ErrorPage.module.css";

function ErrorPage() {
    const error = useRouteError();
    console.error(error.statusText);

    return (
        <div className={style.main}>
            <img alt = "errorIcon" src={errorIcon}></img>
            <h2>Whoops... An error has occurred</h2>
            <i>{error.statusText || error.message}</i>
            <GoHomeButton></GoHomeButton>
        </div>
    );
}

function GoHomeButton() {
    return (
        <Link to="/Shopping-Cart">
            <button onClick={() => {
                console.log("go home")
            }}>Go to home page</button>
        </Link>
    );
}

export default ErrorPage;
