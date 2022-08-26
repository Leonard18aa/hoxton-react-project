import { useEffect, useState } from "react";
import { Finance } from "./Finance";
import { TransactionsComponent } from "./Transaction";

export function HomeComponent(props) {
  const [transaction, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransiction = (payload: any) => {
    const transactionArray = [...transaction];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transaction.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount);
    });
    updateExpense(exp);
    updateIncome(inc);
  };

  useEffect(() => calculateBalance(), [transaction]);

  return (
    <div>
      <Finance
        addTransiction={addTransiction}
        expense={expense}
        income={income}
      />
      <TransactionsComponent transaction={transaction} />
    </div>
  );
}
