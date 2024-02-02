import BottomWarning from "../components/BottomWarning";
import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export function SignIn() {
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Log In"} />
            <SubHeading label={"Enter your details"} />
            <InputBox
              label={"Your mail"}
              placeholder={"shivamkawale111@gmail.com"}
            />
            <InputBox label={"Password"} placeholder={"123"} />
            <ButtonComponent label={"Log In"} />
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
