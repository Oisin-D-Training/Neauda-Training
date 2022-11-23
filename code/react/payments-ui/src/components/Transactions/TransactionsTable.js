import TransactionsRow from "./TransactionsRow";
import "./Transactions.css";
import "../Data/Data.js";
import {
  getAllPayments,
  getAllPaymentsFetchVersion,
  getAllPaymentsAxiosVersion,
} from "../Data/Data.js";
import { useState, useEffect } from "react";

const TransactionsTable = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isLoading, setIsLoading] = useState(0);
  // //0 - not loaded
  // //1 - loading
  // //2 - loaded

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getAllPaymentsAxiosVersion()
      .then((response) => {
        if (response.status === 200) {
          console.log("everything is ok");
          setIsLoading(false);
          setPayments(response.data);
        } else {
          console.log("something went wrong", response.status);
        }
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  // const paymentsPromise = getAllPaymentsAxiosVersion();

  // if (isLoading === 0) {
  //   setIsLoading(1);
  //   paymentsPromise.then((response) => {
  //     if (response.status === 200) {
  //       console.log("everything is ok");
  //       setIsLoading(2);
  //       setPayments(response.data);
  //     } else {
  //       console.log("something went wrong", response.status);
  //     }
  //   });
  //   paymentsPromise.catch((error) => {
  //     console.log("something went wrong", error);
  //   });
  // }

  //  const paymentsPromise = getAllPaymentsFetchVersion();

  // if (isLoading === 0) {
  //   setIsLoading(1);
  //   //if the promise is resolved, then we can use the data
  //   paymentsPromise.then((response) => {
  //     if (response.ok) {
  //       console.log("response ok");
  //       response.json().then((data) => {
  //         // console.log("data: ", data);
  //         setPayments(data);
  //         setIsLoading(2);
  //       });
  //     } else {
  //       console.log("response not ok");
  //     }
  //   });
  //   paymentsPromise.catch((error) => {
  //     console.log("something went wrong", error);
  //   });
  // }

  // //get data from Data.js and store in variable
  // const payments = getAllPayments();

  //create dropdown menu to select country
  const countryList = payments.map((payment) => payment.country);

  const uniqueCountryList = [...new Set(countryList)];

  const countryOptions = uniqueCountryList.map((country) => (
    <option key={country} value={country}>
      {country.toString().toUpperCase()}
    </option>
  ));

  const [country, setCountry] = useState(countryOptions);

  const handleCountryChange = (event) => {
    const option = event.target.value;
    setCountry(option);
  };

  return (
    <div>
      {!isLoading && (
        <div className="transactionsCountrySelector">
          <h1>Select Country</h1>
          <div className="dropdown">
            <select onChange={handleCountryChange}>
              <option value="All">All</option>
              {countryOptions}
            </select>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="loading" style={{ textAlign: "center" }}>
          Loading...
        </div>
      )}
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
