import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import "./App.css";
import React from "react";
function App() {
  const { isAuthenticated,isLoading } = useAuth0();
  if (isLoading) {
    return <h1>Is Loading</h1>
  }
  return (
    <div className="App">
   <LogoutButton /> : <LoginButton />
      <Profile />
    </div>
  );
} 

export default App;
