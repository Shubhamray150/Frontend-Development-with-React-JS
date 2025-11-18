import React from "react";
import { FaFileCsv } from "react-icons/fa6";

const CsvDownload = () => {
  return (
    <button
      className="px-4 py-1 rounded-lg text-sm font-medium cursor-pointer
                     bg-yellow-400 text-black hover:bg-yellow-300 transition "
    >
      <FaFileCsv size={22} />
    </button>
  );
};

export default CsvDownload;
