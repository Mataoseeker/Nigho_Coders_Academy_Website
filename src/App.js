import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Stories from "./Pages/Stories";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
