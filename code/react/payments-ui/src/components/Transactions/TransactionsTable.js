import TransactionsRow from "./TransactionsRow";
import "./Transactions.css";
import "../Data/Data.js";
import {
  getAllPayments,
  getAllPaymentsFetchVersion,
  getAllPaymentsAxiosVersion,
  getAllCountries,
  getAllPaymentsForCountry,
  getAllPaymentsForOrderId,
} from "../Data/Data.js";
import { useState, useEffect } from "react";

const TransactionsTable = (props) => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isLoading, setIsLoading] = useState(0);
  // //0 - not loaded
  // //1 - loading
  // //2 - loaded

  const [countries, setCountries] = useState([]);

  const loadData = (country) => {
    getAllPaymentsForCountry(country)
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

  useEffect(() => {
    loadCountry();
  }, []);

  useEffect(() => {
    if (props.searchTerm !== "") {
      setIsLoading(true);
      getAllPaymentsForOrderId(props.searchTerm)
        .then((response) => {
          setPayments(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  }, [props.searchTerm]);

  const loadCountry = () => {
    getAllCountries()
      .then((response) => {
        if (response.status === 200) {
          console.log("everything is ok");
          setIsLoading(false);
          setCountries(response.data);
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
  // const countryList = payments.map((payment) => payment.country);

  // console.log("countryList: ", countryList);

  // const uniqueCountryList = [...new Set(countryList)];

  // const countryOptions = uniqueCountryList.map((country) => (
  //   <option key={country} value={country}>
  //     {country.toString().toUpperCase()}
  //   </option>
  // ));

  const countryOptions = countries.map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ));

  const [country, setCountry] = useState("");

  const handleCountryChange = (event) => {
    const option = event.target.value;
    setCountry(option);
    setIsLoading(true);
    loadData(option);
  };

  return (
    <div>
      {!isLoading && props.searchTerm === "" && (
        <div className="transactionsCountrySelector">
          <h1>Select Country</h1>
          <div className="dropdown">
            <select onChange={handleCountryChange} defaultValue={country}>
              <option value="---select---">---select---</option>
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
            <th>Order Id</th>
            <th>Date</th>
            <th>Country</th>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => {
            return (
              (country === payment.country || props.searchTerm !== "") && (
                <TransactionsRow
                  key={index}
                  id={payment.id}
                  orderId={payment.orderId}
                  date={payment.date}
                  country={payment.country}
                  currency={payment.currency}
                  amount={payment.amount}
                />
              )
            );
          })}

          {/* {   payments
                .filter (payment => props.searchTerm !== "" || payment.country === selectedCountry)
                .map( (payment, index) => {
                return <TransactionsRow key={index} id={payment.id} date={payment.date}
                country = {payment.country}  currency = {payment.currency} orderId={payment.orderId}
                amount={payment.amount}   />
            }   )   } */}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
