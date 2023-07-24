import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <div className="poster">
      <div className="top">
        <Header />
        <Main />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
