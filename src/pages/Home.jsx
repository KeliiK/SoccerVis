import "../style/Home.css"
import { useAuth } from "react-oidc-context";

function Home() {
    const auth = useAuth();

    return (
        <div id="container">
            <h1 id="title">SoccerVis</h1>
            <div id="buttonContainer">
                <button onClick={() => auth.signinRedirect()}>Log In</button>
                <button>New User</button>
            </div>
        </div>

    );
}

export default Home;