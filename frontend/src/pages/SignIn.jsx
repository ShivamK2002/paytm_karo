import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Log In"} />
            <SubHeading label={"Enter your details"} />
            <InputBox
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label={"Your mail"}
              placeholder={"shivamkawale111@gmail.com"}
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder={"123"}
            />
            <ButtonComponent
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Log In"}
            />
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
