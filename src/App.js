import React from "react";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import './App.css';
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Products />
    </div>
  );
}

export default App;
