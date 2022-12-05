import './App.css';
import Menu from './components/Menu';
import Search from './components/Search';
import TransactionsTable from './components/Transactions/TransactionsTable';
import { useState } from "react";
import AddTransaction from './components/AddTransaction/AddTransaction';
import { addTransaction } from './components/Data/Data';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Menu />
      <AddTransaction addTransaction={addTransaction}/>
      <Search setSearchTerm={setSearchTerm}/>
      <TransactionsTable searchTerm={searchTerm} />
    </div>
  );
}

export default App;
