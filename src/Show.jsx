import { useContext } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";

const Show = () => {
    const [expenses, setexpenses] = useContext(ExpenseContext);
    return (
        <>
            <Link to="/filter">Filter Expenses</Link>
            <h2>
                Total Spent: {expenses.reduce((ac, cv) => ac + +cv.amount, 0)}{" "}
            </h2>
            <ol>
                {expenses.length === 0
                    ? "No Data Present"
                    : expenses.map((e, index) => (
                          <li key={index}>
                              {e.remark}({e.payment}) - {e.category} -{" "}
                              {e.amount} <span>❌</span>
                          </li>
                      ))}
            </ol>
        </>
    );
};

export default Show;
