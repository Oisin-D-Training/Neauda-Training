import "./AddTransaction.css";
import { useReducer, useState } from "react";

const AddTransaction = (props) => {

const [submitted, setSubmitted] = useState(false);


  const initialNewTransactionState = {
    orderId: "",
    date: new Date().toISOString().slice(0, 10),
    country: "",
    currency: "",
    amount: "0",
    taxCode: "",
    taxRate: "0",
    
  };

  const formReducer = (state, data) => {
    return {
      ...state,
      [data.field]: data.value,
    };
  };

  const handleChange = (event) => {
    dispatch({ field: event.target.id, value: event.target.value });
  };

  //use reducer to manage state and dispatch actions to update state when form fields change
  const [newTransaction, dispatch] = useReducer(
    formReducer,
    initialNewTransactionState
  );

  //handle form submission and call the addTransaction function passed in as a prop from the parent component (Transactions) to add the new transaction to the list of trans
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTransaction(newTransaction);
        dispatch({ field: "orderId", value: "" });
        dispatch({ field: "date", value: new Date().toISOString().slice(0, 10) });
        dispatch({ field: "country", value: "" });
        dispatch({ field: "currency", value: "" });
        dispatch({ field: "amount", value: "0" });
        dispatch({ field: "taxCode", value: "" });
        dispatch({ field: "taxRate", value: "0" });
        setSubmitted(true);
    }
  return (
    <>
      <form onSubmit={handleSubmit} className="addTransactionsForm">
        <h2>New transaction</h2>
        <label htmlFor="orderId">Order Id</label>
        <input
          type="text"
          id="orderId"
          value={newTransaction.orderId}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="date">Date</label>
        {/* date format yyyy-mm-dd */}
        <input
          type="date"
          id="date"
          value={newTransaction.date}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={newTransaction.country}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="currency">Currency</label>
        <input
          type="text"
          id="currency"
          value={newTransaction.currency}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          value={newTransaction.amount}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="taxCode">Tax Code</label>
        <input
          type="text"
          id="taxCode"
          value={newTransaction.taxCode}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="taxRate">Tax Rate</label>
        <input
          type="text"
          id="taxRate"
          value={newTransaction.taxRate}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="type">Type</label>
        <input type="text" id="type" />
        <br />
        <button type="submit">Save</button>
        {submitted? (
            <p className="transactionAddedMessage">
                Transaction added successfully
            </p>
        ) : null}
      </form>
    </>
  );
};

export default AddTransaction;
