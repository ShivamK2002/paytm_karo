import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="border shadow-md p-5 flex list-none justify-end space-x-11 font-semibold">
      <li
        onClick={() => {
          navigate("/");
        }}
        className=" cursor-pointer active:text-blue-600 hover:font-bold"
      >
        Home
      </li>
      <li
        onClick={() => {
          navigate("/dashboard");
        }}
        className=" cursor-pointer active:text-blue-600 hover:font-bold"
      >
        Dashboard
      </li>
      <li
        onClick={() => {
          navigate("/signup");
        }}
        className=" cursor-pointer active:text-blue-600 hover:font-bold"
      >
        Sign Up
      </li>
      <li
        onClick={() => {
          navigate("/signin");
        }}
        className=" cursor-pointer active:text-blue-600 hover:font-bold"
      >
        Sign In
      </li>
    </div>
  );
}
