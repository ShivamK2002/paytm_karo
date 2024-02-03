import { useEffect, useState } from "react";
// import { ButtonComponent } from ";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

export const Users = () => {
  // Replace with backend call
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        setUsers(response.data.users);
      });
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {console.log(users)}
        {users &&
          users.map(
            (user, index) => <User key={index} user={user} />
            // console.log(user)
          )}
      </div>
    </>
  );
};

function User({ user, index }) {
  const navigate = useNavigate();

  return (
    <div key={index} className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstname[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstname} {user.lastname}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <ButtonComponent
          onClick={(e) => {
            navigate(
              "/send?username=" + user.username + "&name=" + user.firstname
            );
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
