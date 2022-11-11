import classes from "./Form.module.css";
import PasswordChecklist from "react-password-checklist";
import { useState } from "react";

const Form = () => {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  return (
    <form className={classes.formBox}>
      <div>
        <label>Username:</label> <br />
        <input type="text"></input> <br />
        <label>Password:</label> <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>{" "}
        <br />
        <label>Confirm Password:</label> <br />
        <input
          type="password"
          onChange={(e) => setPasswordAgain(e.target.value)}
        ></input>
        <br />
      </div>
      <PasswordChecklist
        rules={["minLength", "specialChar", "number", "capital", "match"]}
        minLength={5}
        value={password}
        valueAgain={passwordAgain}
        onChange={(isValid) => {}}
      ></PasswordChecklist>
      <div>
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

export default Form;
