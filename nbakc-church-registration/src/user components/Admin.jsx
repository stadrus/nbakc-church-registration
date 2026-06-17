import GoogleSheets from "./GoogleSheets";
import LogOut from "./LogOut";
import { useState, useEffect } from "react";

const Admin = () =>{
    const [userName, setUserName] = useState("");

    useEffect (() => {
        setUserName(localStorage.getItem("userName") || "");

    },[]);

    return (
        <div className="admin-page">
            <LogOut />  
            <h1>Admin Page</h1>
            <h3>Welcome, {userName} </h3>
            <GoogleSheets />
        </div>
    )
}
export default Admin;