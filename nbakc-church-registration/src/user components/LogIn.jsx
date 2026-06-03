import { GoogleLogin } from "@react-oauth/google";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";



const LogIn = () => {
    const navigate = useNavigate ();
    return(
        <div className="google-button">
            <GoogleLogin
            onSuccess={(credentialResponse) => {
                console.log(jwtDecode(credentialResponse.credential))
                navigate('/Admin');
                }}
            onError ={() => console.log("Log in failed")}>
            </GoogleLogin>
        </div>
            
    )
}
export default LogIn;