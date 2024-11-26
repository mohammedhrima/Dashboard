import "./app.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Tables from "./pages/Tables/Tables";
import Navbar from "./pages/utils/Navbar/Navbar";
import Billing from "./pages/Billing/Billing";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <div id="body">
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="tables" element={<Tables />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
