import classes from "./Form.module.css";
import PasswordChecklist from "react-password-checklist";
import { useState } from "react";

const Form = () => {
  return (
    <form className={classes.formBox}>
      <div>
        <h2 className={classes.formTitle}>Create Account</h2>
      </div>
      <div className={classes.inputBoxes}>
        <input type="text" placeholder="Username"></input> <br />
        <input type="password" placeholder="Password"></input> <br />
        <input type="password" placeholder="Confirm Password"></input>
        <br />
      </div>
      <div className={classes.termsCheckbox}>
        <label className={classes.termsLabel}>
          <input type="checkbox" />
          <span></span>I agree to the <a href="#">Terms & Conditions.</a>
        </label>
      </div>
      <div>
        <button className={classes.signUpButton} type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Form;
