import GoogleSheets from "./GoogleSheets";
import LogOut from "./LogOut";

const Admin = () =>{
    return (
        <div>
            <LogOut />
            <h1>Admin Page</h1>
            <GoogleSheets />
        </div>
    )
}
export default Admin;