import "./App.css";
import React from "react";
import UserContextProvider from "./contexts/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-center font-bold text-3xl text-white mb-10">
        This is test project
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
