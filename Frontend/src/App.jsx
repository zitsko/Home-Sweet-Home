import SignupLoginPage from "./pages/Signup-login";
import Admin from "./pages/Admin";
import CreateHome from "./pages/CreateHome";
import { Routes, Route } from "react-router-dom";
import UpdateHome from "./pages/UpdateHome";
import Homepage from "./pages/Homepage"
// import ContainerOutsideExample from "./components/Navbar";

function App() {
  return (
    <>
      {/* <ContainerOutsideExample /> */}
      <Routes>
        <Route path="/" element={<SignupLoginPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<CreateHome />} />
        <Route path="/update/:id" element={<UpdateHome />} />
        <Route path="/HomePage" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
