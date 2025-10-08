import React from "react";

const MailListHead = () => {
  return (
    <div className="w-full border  flex flex-row px-4 py-2">
      <div>
        <input type="checkbox" />
        <select name="" id=""></select>
      </div>
      <div className="flex-1 flex items-center justify-center gap-2">
        <span>Archive</span>
        <span>Move</span>
        <span>Delete</span>
        <span>Spam</span>
      </div>
      <div>
        <span>Sort</span>
        <select name="" id=""></select>
      </div>
    </div>
  );
};

export default MailListHead;
