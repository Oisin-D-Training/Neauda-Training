import TransactionsRow from './TransactionsRow';

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Country</th>
          <th>Currency</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <TransactionsRow id = "1 " date = "2020-01-01" country = "USA" currency = "USD" amount = "100" />
        <TransactionsRow id = "2 " date = "2020-01-02" country = "USA" currency = "USD" amount = "200" />
        <TransactionsRow id = "3 " date = "2020-01-03" country = "USA" currency = "USD" amount = "300" />
      </tbody>
    </table>
  );
};

export default Table;
