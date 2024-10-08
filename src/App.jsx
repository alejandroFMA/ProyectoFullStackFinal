import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
      </Router>
      <Footer />
    </>
  );
}

export default App;
