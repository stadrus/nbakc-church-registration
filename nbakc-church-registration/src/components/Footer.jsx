import References from "./References";
import Home from "./Home"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <footer>
            <p> &#x00A9; NEW BEGINNING APOSTOLIC CHURCH KANSAS CITY, MO</p>
            <nav className="nav-links">
                <Link to = "/" element = {<Home />}>Home</Link>
                <Link to ="/References" element = {<References />  } > References </Link>
            </nav>
            </footer>
        </div>
    );
}
export default Footer;