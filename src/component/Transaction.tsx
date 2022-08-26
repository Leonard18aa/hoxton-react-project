import { useEffect, useState } from "react";
import "./Transaction.css";
import { currencyFormatter } from "./utils";

const TransictionCell = (props) => {
  return (
    <div className="addedMenu">
    <div className="transactionMenu">
      <span>{props.payload.desc}</span>
      <span>{currencyFormatter.format(props.payload.amount)}</span>
    </div>
    </div>
  );
};

export function TransactionsComponent(props) {
  const [searchText, updateSearchText] = useState("");
  const [filterTransaction, updateTnx] = useState(props.transaction);
  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTnx(props.transaction);
      return;
    }
    let txn = [...props.transaction];
    txn = txn.filter((payload) => 
    payload.desc.toLowerCase().includes(searchText.toLocaleLowerCase().trim())
    )
    updateTnx(txn)
  };

  useEffect(() => filterData(searchText), [props.transaction])

  return (
    <div>
      <h1 className="transactionName">Transiction</h1>
      <div className="searchBarDiv">
      <input
      className="searchBarFilter"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {updateSearchText(e.target.value)
        filterData((e.target.value))}}
      />
      </div>
      {filterTransaction?.length
        ? filterTransaction.map((payload) => (
            <TransictionCell payload={payload} />
          ))
        : ""}
    </div>
  );
}
