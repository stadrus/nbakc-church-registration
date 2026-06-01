import { GoogleLogin } from "@react-oauth/google";

const LogIn = () => {
    return(
        <div className="google-button">
            <GoogleLogin
            onSuccess={(credentialResonse) => {
                    console.log(credentialResonse)
                }}
            onError ={() => console.log("Log in failed")}>
            </GoogleLogin>
        </div>
            
    )
}
export default LogIn;