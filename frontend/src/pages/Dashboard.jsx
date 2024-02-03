import { useState, useEffect } from "react";
import axios from "axios";
import Appbar from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
export function Dashboard() {
  const [val, setVal] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        setVal(response.data.balance);
      });
  }, []);

  return (
    <div>
      <Appbar />
      <div className="p-7">
        <Balance value={val} />
        <Users />
      </div>
    </div>
  );
}
