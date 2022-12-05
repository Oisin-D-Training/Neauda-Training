import Search from "../Search";
import TransactionsTable from "./TransactionsTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const FindTransactionPage = (props) => {
  const params = useParams();

  useEffect(() => {
    if (params.orderId !== props.searchTerm) {
      props.setSearchTerm(params.orderId);
    }
  }, [params.orderId]);

  return (
    <>
      <Search setSearchTerm={props.setSearchTerm} />
      <TransactionsTable searchTerm={props.searchTerm} />
    </>
  );
};

export default FindTransactionPage;
