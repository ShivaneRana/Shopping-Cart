import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return(
        <div>
            <Link to="checkout">
                <button >
                    Go to the checkout page.
                </button>
            </Link>
            <h1>This is the home page</h1>
            <Link to="item">
                <button>
                    Go to the item page.
                </button>
            </Link>
        </div>
    );
}

export default App;
