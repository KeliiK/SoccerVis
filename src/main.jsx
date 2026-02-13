import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-oidc-context";
import "./index.css";
import App from "./App.jsx";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_eq5rqBCeV",
  client_id: "460ga3mrud071ebkohkfgtv4aq",
  redirect_uri: "http://localhost:5173/dashboard",
  response_type: "code",
  scope: "email openid phone",
};


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
