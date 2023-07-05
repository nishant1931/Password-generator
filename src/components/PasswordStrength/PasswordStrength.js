import React from "react";

const PasswordStrength = ({ password = "" }) => {
  const generatedPassword = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 6) {
      return "Weak";
    } else if (passwordLength < 10) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Highly Secure";
    }
  };

  const passwordStrength = generatedPassword();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="password_strength">
      Password Strength: <span>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrength;
