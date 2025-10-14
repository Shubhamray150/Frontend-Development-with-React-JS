import React from "react";
import MailMessageHeader from "./MailMessageHeader";
import MailMessageBody from "./MailMessageView";

const MailMessage = () => {
  return (
    <div>
      <MailMessageHeader />
      <MailMessageBody />
    </div>
  );
};

export default MailMessage;
