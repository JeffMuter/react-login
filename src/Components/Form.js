import classes from "./Form.module.css";
import PasswordChecklist from "react-password-checklist";
import { useState } from "react";

const Form = () => {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  let checkVis = false;

  const showChecks = () => {
    if (checkVis) {
      return (
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "match"]}
          minLength={5}
          value={password}
          valueAgain={passwordAgain}
          onChange={(isValid) => {}}
        ></PasswordChecklist>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clicked = () => {
    checkVis = true;
  };

  return (
    <form className={classes.formBox} onSubmit={handleSubmit} onClick={clicked}>
      <div className={classes.inputBoxes}>
        <input type="text" placeholder="Username"></input> <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>{" "}
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setPasswordAgain(e.target.value)}
        ></input>
        <br />
      </div>
      <div>{showChecks}</div>
      <div>
        <button className={classes.signUpButton} type="button">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Form;
