import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
function App() {
  return (
    <>
      <Routes>
        <Route path="https://imonr001.github.io/note_taking/login" exact={true} element={<Login />}></Route>
        <Route path="https://imonr001.github.io/note_taking/signup"  element={<SignUp />}></Route>
        <Route path="https://imonr001.github.io/note_taking/"  element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
