import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {

    return (
        <div>
            <div id="overlay"></div>
            <video src="./field.mp4" autoPlay muted loop></video>
            <Outlet />
        </div>
    );
}

export default Layout;