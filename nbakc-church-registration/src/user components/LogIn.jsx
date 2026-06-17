import { GoogleLogin } from "@react-oauth/google";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";



const LogIn = () => {
    const navigate = useNavigate ();
    return(
        <div className="google-button">
            <GoogleLogin
            onSuccess={(credentialResponse) => {
                const user = jwtDecode(credentialResponse.credential);
                localStorage.setItem("userName", user.name);
                localStorage.setItem("userEmail", user.email);
                localStorage.setItem("isAuthenticated", "true");
                console.log(jwtDecode(credentialResponse.credential))
                navigate('/Admin');
                }}
            onError ={() => console.log("Log in failed")}
            theme="filled_blue"
            size="large"
            shape="pill"
            text="signin_with"
            width="300">
            
            
            </GoogleLogin>
        </div>
            
    )
}
export default LogIn;