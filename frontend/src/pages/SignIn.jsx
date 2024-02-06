import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ErrorPopup from "../components/ErrorPopup";
export function SignIn() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Navbar />
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Log In"} />
            <SubHeading label={"Enter your details"} />
            <InputBox
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label={"Your mail"}
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
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signin",
                    {
                      username,
                      password,
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
                    setUsername("");
                    setPassword("");
                    setErrorMessage("");
                  }, [1000]);
                }
              }}
              label={"Log In"}
            />
            {errorMessage && <ErrorPopup errorMessage={errorMessage} />}
            <BottomWarning
              label={"Not registered yet?"}
              buttonText={"Sign Up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
