import React, { useContext, useState } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";

const Filter = () => {
    const [expenses] = useContext(ExpenseContext);

    const [key, setkey] = useState("payment");
    const [value, setvalue] = useState("");

    const [filterexpenses, setfilterexpenses] = useState([]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const filterExpenses = expenses.filter((e) => e[key] == value);
        setfilterexpenses(filterExpenses);
    };

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <select onChange={(e) => setkey(e.target.value)} value={key}>
                    <option value="amount">Amount</option>
                    <option value="remark">Remark</option>
                    <option value="payment">Payment</option>
                    <option value="category">Category</option>
                </select>
                <input
                    onChange={(e) => setvalue(e.target.value)}
                    value={value}
                    type="text"
                    placeholder="Enter Value"
                />
                <button>Filter</button>
            </form>
            <hr />
            {filterexpenses.length === 0
                ? "no filter selected"
                : filterexpenses.map((e, index) => (
                      <p key={index}>
                          {e.remark}({e.payment}) - {e.category} - {e.amount}{" "}
                          <span>❌</span>
                      </p>
                  ))}
            <Link to="/show">Go back</Link>
        </div>
    );
};

export default Filter;

const obj = {
    name: "john",
    city: "bhopal",
};

// obj.name === obj["name"] // john
// let x = "name"; // key name
// obj.x  XXXXXX
// obj[x] // john
