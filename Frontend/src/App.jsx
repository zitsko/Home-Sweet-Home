import "./App.css";
import SignupLoginPage from "./pages/Signup-login";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupLoginPage />} />
        <Route path="/homes" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
