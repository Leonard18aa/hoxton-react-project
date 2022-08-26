import { useState } from "react";
import "./Finance.css";
import { currencyFormatter } from "./utils";

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  const addTransiction = () => {
    props.addTransiction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });

    props.toggleAddTxn();
  };

  return (
    <div className="TransictionView">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button onClick={addTransiction}>ADD TRANSACTION</button>
    </div>
  );
};

export function Finance(props) {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);

  return (
    <div className="Finance">
      <div className="Balance">
        <h1>Balance {currencyFormatter.format(props.income - props.expense)}</h1>
        
        <button onClick={() => toggleAddTxn(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "ADD"}
        </button>
      </div>
      {isAddTxnVisible && (
        <AddTransactionView
          toggleAddTxn={toggleAddTxn}
          addTransiction={props.addTransiction}
        />
      )}
      <div className="expenseContainer" >
        <div >
          Expense <span>{currencyFormatter.format(props.expense)}</span>
        </div>
        <div >
          Income <span>{currencyFormatter.format(props.income)}</span>
        </div>
      </div>
    </div>
  );
}
