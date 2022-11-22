import TransactionsRow from "./TransactionsRow";
import "./Transactions.css";
import "../Data/Data.js";
import { getAllPayments } from "../Data/Data.js";
import { useState } from "react";

const TransactionsTable = () => {
  //get data from Data.js and store in variable
  const payments = getAllPayments();

  //create dropdown menu to select country
  const countryList = payments.map((payment) => payment.country);

  const uniqueCountryList = [...new Set(countryList)];

  const countryOptions = uniqueCountryList.map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ));

  const [country, setCountry] = useState(countryOptions);

  const handleCountryChange = (event) => {
    const option = event.target.value;
    setCountry(option);
  };

  return (
    <div>
      <div className="transactionsCountrySelector">
        <h1>Select Country</h1>
        <div className="dropdown">
          <select onChange={handleCountryChange}>
            <option value="All">All</option>
            {countryOptions}
          </select>
        </div>
      </div>
      <table className="transactionsTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Country</th>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => {
            return (
              //if country is selected, display only that country else display all countries
              (country === payment.country || country === "All") && (
                <TransactionsRow
                  key={index}
                  id={payment.id}
                  date={payment.date}
                  country={payment.country}
                  currency={payment.currency}
                  amount={payment.amount}
                />
              )
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
