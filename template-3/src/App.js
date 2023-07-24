import React from "react";
import "./styles.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="frame-1">
      <div className="rectangle-1"></div>
      <div className="ellipse-1"></div>
      <div className="ellipse-2"></div>
      <div className="rectangle-2">
        <div className="top">
          <Header />
          <Main />
        </div>
        <div className="bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
