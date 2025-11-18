import React from "react";
import { FaFileCsv } from "react-icons/fa6";
import { useSelector } from "react-redux";

const CsvDownload = () => {
  const expense = useSelector((state) => state.expense);
  console.log(expense.expenseItems);

  const downloadCsv = () => {
    const header = ["Id,Description,Amount,Category"];
    const row = expense.expenseItems.map(
      (item) => `${item.id},${item.description},${item.amount},${item.category}`
    );
    const csv = [header, ...row].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "userData.csv";

    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={downloadCsv}
      className="px-4 py-1 rounded-lg text-sm font-medium cursor-pointer bg-yellow-400 text-black hover:bg-yellow-300 transition "
    >
      <FaFileCsv size={22} />
    </button>
  );
};

export default CsvDownload;
