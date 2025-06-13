import {Link} from "react-router-dom";
import style from "../style/ErrorPage.module.css"

function ErrorPage(){
    return(
        <div className={style.main}>
            <h1>Oh no! an error has occurred.</h1>
        </div>
    )
}

export default ErrorPage;
