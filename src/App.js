import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./data/data";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const cards = Data.map(item => (
    <div className={`col-sm-4 mb-3 mt-5`} key={item.key}>
      <Card item={item} />
    </div>
  ));
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">{cards}</div>
      </div>
      <Footer />
    </div>
  );
}
