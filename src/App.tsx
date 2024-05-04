import React from "react";
import Header from "./components/header/header";

import "./App.scss";
import Overview from "./components/overview/overview";
import Transactions from "./components/transactions/transactions";

function App() {
  return (
    <>
      <div className="page-top-wrapper">
        <Header />
        <Overview />
      </div>
      <Transactions />
    </>
  );
}

export default App;
