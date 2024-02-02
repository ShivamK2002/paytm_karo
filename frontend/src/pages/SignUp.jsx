import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import ButtonComponent from "../components/ButtonComponent";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useState } from "react";
export function SignUp() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
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
              label={"First Name"}
              placeholder={"Shivam"}
            />
            <InputBox
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              label={"Last Name"}
              placeholder={"Kawale"}
            />
            <InputBox
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label={"Your Mail"}
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
                await axios.post("https://localhost/3000/api/v1/user/signup", {
                  username,
                  password,
                  firstname,
                  lastname,
                });
              }}
              label={"Sign Up"}
            />
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
