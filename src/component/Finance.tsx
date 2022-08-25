import { useState } from "react";
import "./Finance.css";
import { currencyFormatter } from "../utils";

export function Finance() {
  const [payment, setpayment] = useState(5000);
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      title: "Entertaiment",
      minBudget: 200,
      maxBudget: 1000,
    },
    {
      id: 2,
      title: "School",
      minBudget: 1000,
      maxBudget: 10000,
    },
    {
      id: 3,
      title: "Grocery",
      minBudget: 200,
      maxBudget: 500,
    },
    {
      id: 4,
      title: "Health",
      minBudget: 200,
      maxBudget: 1000,
    },
  ]);

  return (
    <div className="Finance">
      <div className="header-finance">
        <h1>Your Budgets</h1>
        <button>Add Budget</button>
        <button>Add Expense</button>
      </div>
      <h1>My monthly payment {currencyFormatter.format(payment)}</h1>
      <div className="Budget-List">
        {budgets.map((budget) => {
          return (
            <>
              <h1>{budget.title}</h1>
              <h1>
                Min budget {currencyFormatter.format(budget.minBudget)}
              </h1>
              <h1>
                Max budget {currencyFormatter.format(budget.maxBudget)}
              </h1>
            </>
          );
        })}
      </div>
    </div>
  );
}
