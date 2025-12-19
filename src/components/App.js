import React from "react";
import AuthProvider from "./AuthProvider";
import Auth from "./Auth";

function App() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}

export default App;
