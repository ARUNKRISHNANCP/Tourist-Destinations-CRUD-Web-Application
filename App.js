import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SplashScreen from "./components/SplashScreen";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
