import "./App.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import SubNavbar from "./Components/SubNavbar/SubNavbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SubNavbar />
      <Main />
    </>
  );
}

export default App;
