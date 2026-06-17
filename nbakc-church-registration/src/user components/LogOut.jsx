import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LogOut = () =>{
    const navigate = useNavigate();

    const handleLogout = () => {
        googleLogout()
        navigate("/")
     }
     return(
        <div>
            <button className="logout-button" onClick={handleLogout}> Log Out</button>
        </div>
     )
}
export default LogOut;