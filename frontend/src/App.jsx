import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import SendMoney from "./pages/SendMoney";
import { Dashboard } from "./pages/Dashboard";
import Home from "./pages/Home";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "light" : "dark", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      // secondary: {
      //   main: "#131052",
      // },
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar
            toggleDarkMode={toggleDarkMode}
            toggleDarkTheme={toggleDarkTheme}
          />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
            {/* <Route path="/logout" element={<LogOut />}></Route> */}
            <Route path="/send" element={<SendMoney />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
