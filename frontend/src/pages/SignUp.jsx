import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import ButtonComponent from "../components/ButtonComponent";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ErrorPopup from "../components/ErrorPopup";
export function SignUp() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <Navbar />
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"} />
            <SubHeading
              label={"Enter your information to create an account with us"}
            />
            <InputBox
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstname}
              label={"First Name"}
              placeholder={"Shivam"}
            />
            <InputBox
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              label={"Last Name"}
              placeholder={"Kawale"}
            />
            <InputBox
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label={"Your Mail"}
              placeholder={"shivamkawale111@gmail.com"}
            />
            <InputBox
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder={"123"}
            />
            <ButtonComponent
              onClick={async () => {
                try {
                  setErrorMessage("");
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signup",
                    {
                      username,
                      password,
                      firstname,
                      lastname,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard");
                } catch (error) {
                  if (error.response.data.message) {
                    setErrorMessage(error.response.data.message);
                  } else setErrorMessage("It's not you but us...");
                } finally {
                  setTimeout(() => {
                    setErrorMessage("");
                    setFirstName("");
                    setLastName("");
                    setUsername("");
                    setPassword("");
                  }, [1000]);
                }
              }}
              label={"Sign Up"}
            />
            {errorMessage && <ErrorPopup errorMessage={errorMessage} />}
            <BottomWarning
              label={"Already registered?"}
              buttonText={"Log In"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
