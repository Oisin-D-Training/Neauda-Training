import "./App.css";
import Menu from "./components/Menu";
import Search from "./components/Search";
import TransactionsTable from "./components/Transactions/TransactionsTable";
import { useState } from "react";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import { addTransaction } from "./components/Data/Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindTransactionPage from "./components/Transactions/FindTransactionPage";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
 <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/add" element = {<AddTransaction />} />
        <Route path="/find" element = {
          <FindTransactionPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
        />
        <Route path="/find/:orderId" element = {
          <FindTransactionPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
        />
        <Route path="/" element = { <h1>Welcome to the Payments system</h1>}/>
        <Route path="*" element = { <h1>Sorry - that page doesn't exist</h1>}/>
      </Routes>     
    </BrowserRouter>

  );
}

export default App;
