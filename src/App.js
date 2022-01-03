import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />

      {/* <div className="container">
          <TextForm heading="Enter text to analyse" />
        </div> */}

      <div>
        <About />
      </div>
    </>
  );
}

export default App;
