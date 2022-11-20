import "./App.css";
import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Right from "./components/Right";
function App() {
  return (
    <>
      <Navbar />
      <div className="site">
        <div className="lesite">
          <Left />
        </div>
        <div className="risite">
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
