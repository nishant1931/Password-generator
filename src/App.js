import React, { useState } from "react";
import usePasswordState from "./hooks/usePasswordState";
import PasswordStrength from "./components/PasswordStrength/PasswordStrength";
import Button from "./components/Button/Button";
import CheckBox from "./components/CheckBox/CheckBox";

const initData = [
  { title: "Include Uppercase Letters", state: false },
  { title: "Include Lowercase Letters", state: false },
  { title: "Include Numbers", state: false },
  { title: "Include Symbols", state: false },
];

const App = () => {
  const [length, setLength] = useState(6);
  const [checkboxData, setCheckboxData] = useState(initData);
  const [copied, setCopied] = useState(false);

  const { password, errorMessage, generatedPassword } = usePasswordState();

  const changeLengthHandler = (e) => {
    setLength(e.target.value);
  };

  const checkboxHandler = (i) => {
    const updatedCheckbox = [...checkboxData];
    updatedCheckbox[i].state = !updatedCheckbox[i].state;
    setCheckboxData(updatedCheckbox);
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="container">
      {/* Password text and copy */}
      {password && (
        <div className="header">
          <h1 className="title">{password}</h1>
          {/* <button className="copyBtn" onClick={copyHandler}>
            {copied ? "Copied" : "Copy"}
          </button> */}
          <Button
            customClass="copyBtn"
            onClick={copyHandler}
            text={copied ? "Copied" : "Copy"}
          />
        </div>
      )}
      {/* Character length aND SLIDER  */}
      <div className="char_length">
        <span>
          <label>Character length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          value={length}
          max="20"
          onChange={changeLengthHandler}
        />
      </div>

      {/* Checkboxes */}
      <div className="checkBoxes">
        {checkboxData.map((checkbox, i) => (
          <CheckBox
            key={i}
            checkedState={checkbox.state}
            onChange={() => checkboxHandler(i)}
            title={checkbox.title}
          />
        ))}
      </div>

      {/* Strength passwordx */}
      <PasswordStrength password={password} />

      {/* Error message */}
      {errorMessage && <div className="error_message">{errorMessage}</div>}

      {/* Generate button */}
      <Button
        customClass="generateBtn"
        onClick={() => generatedPassword(checkboxData, length)}
        text="Generate Password"
      />
    </div>
  );
};

export default App;
