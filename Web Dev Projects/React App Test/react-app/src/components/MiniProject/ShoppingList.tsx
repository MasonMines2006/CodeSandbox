import React, { useState, useEffect } from "react";
import { type FieldValues } from "react-hook-form";
import Delete from "./Delete";

interface Props {
  data?: FieldValues;
}

const categories = ["Full List", "Groceries", "Utilities", "Entertainment"];

const convertData = (allData: string[][]) => {
  return allData.map((row, rowIndex) => (
    <div className="row border" key={rowIndex}>
      {row.map((cell, colIndex) => (
        <div className="col border p-1" key={colIndex}>
          {cell}
        </div>
      ))}
    </div>
  ));
};

const ShoppingList = ({ data }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [allData, setAllData] = useState<[string, string, string, any][]>([
    ["Description", "Amount", "Category", ""],
    ["Total", "$0.00", "", ""],
  ]);
  const handleDelete = (index: number) => {
    setAllData((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (data?.description && data?.category && data?.amount) {
      const formattedAmount = "$" + data.amount.toFixed(2);

      const newRow: [string, string, string, any] = [
        data.description,
        formattedAmount,
        data.category,
        <Delete onDelete={() => handleDelete(allData.length)} />,
      ];

      const withoutTotal = allData.filter((row) => row[0] !== "Total");

      const totalAmount = withoutTotal.reduce((acc, row) => {
        const val = parseFloat(row[1].replace("$", ""));
        return isNaN(val) ? acc : acc + val;
      }, data.amount);

      const newTotal: [string, string, string, string] = [
        "Total",
        "$" + totalAmount.toFixed(2),
        "",
        "",
      ];

      setAllData([...withoutTotal, newRow, newTotal]);
    }
  }, [data]);
  const getDisplayData = () => {
    const [header, ...rows] = allData;
    const dataRows = rows.filter((row) => row[0] !== "Total");

    let filtered = dataRows;

    if (selectedCategory !== "") {
      filtered = filtered.filter((row) => row[2] === selectedCategory);
    }

    return [header, ...filtered, allData[allData.length - 1]];
  };

  return (
    <>
      <select
        id="category"
        className="form-control mb-3"
        defaultValue=""
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="container text-center">
        {convertData(getDisplayData())}
      </div>
    </>
  );
};

export default ShoppingList;
