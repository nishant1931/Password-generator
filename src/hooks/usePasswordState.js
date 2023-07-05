import React, { useState } from "react";

const usePasswordState = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatedPassword = (checkBoxData, length) => {
    let charSet = "",
      finalPassword = "";

    const selectedOption = checkBoxData.filter((checkBox) => checkBox.state);

    if (selectedOption.length === 0) {
      setErrorMessage("Please select combinations to generate password ");
      setPassword("");
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charSet += "0123456789";
          break;
        case "Include Symbols":
          charSet += "@!$%^&*()";
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      finalPassword += charSet[randomIndex];
    }

    setPassword(finalPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatedPassword };
};

export default usePasswordState;
