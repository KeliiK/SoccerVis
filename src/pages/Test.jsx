import "../style/test.css"
import { useAuth } from "react-oidc-context";

function Test() {

    const auth = useAuth();

    const signOutRedirect = () => {
        const clientId = "460ga3mrud071ebkohkfgtv4aq";
        const logoutUri = "<logout uri>";
        const cognitoDomain = "https://soccervis.auth.us-east-2.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
        <div>
            <pre> Hello: {auth.user?.profile.email} </pre>
            <pre> ID Token: {auth.user?.id_token} </pre>
            <pre> Access Token: {auth.user?.access_token} </pre>
            <pre> Refresh Token: {auth.user?.refresh_token} </pre>

            <button onClick={() => auth.removeUser()}>Sign out</button>
        </div>
        );
    }

    return (
        <div id="testContainer">
            {/*
            <div>
                <button onClick={() => auth.signinRedirect()}>Sign in</button>
                <button onClick={() => signOutRedirect()}>Sign out</button>
            </div>
            */}
            {
            <li class="menu-item">
                <input type="checkbox" id="library-toggle" hidden/>

                <label for="library-toggle" class="menu-trigger">
                    Library
                </label>

                <ul class="submenu">
                    <li>Matches</li>
                    <li>Teams</li>
                    <li>Players</li>
                </ul>

                <label>Library2</label>
            </li>
            }

        </div>
    );
}

export default Test;