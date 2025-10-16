import React, { useEffect, useMemo, useState } from "react";
import MailItem from "./MailItem";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { setIsLoading } from "../../../Store/uiSlice";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const MailListBody = () => {
  const { folder } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui);
  const [mailList, setMailList] = useState([]);
  console.log(folder);

  const { data, error } = useFetch(
    `https://mailboxclient-d6e39-default-rtdb.firebaseio.com/mail/${
      folder || "inbox"
    }.json`
  );

  useEffect(() => {
    if (data) {
      const loadData = [];
      for (let key in data) {
        loadData.push({ ...data[key], id: key });
      }
      setMailList(loadData);
    }
  }, [data]);

  const mailListItems = useMemo(() => {
    return mailList.map((item) => {
      return <MailItem key={item.id} item={item} folder={folder || "inbox"} />;
    });
  }, [mailList]);

  return (
    <div>
      <span className="px-2 ">Today</span>
      {state.isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          {mailList.map((item) => {
            return (
              <MailItem key={item.id} item={item} folder={folder || "inbox"} />
            );
          })}
          {/* {mailListItems} */}
        </div>
      )}
    </div>
  );
};

export default MailListBody;
