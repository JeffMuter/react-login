import classes from "./Form.module.css";
import TermsDoc from "../TermsDoc/TermsDoc.js";

const Form = (props) => {
  const toTermDoc = () => {
    window.location.href = "../TermsDoc/TermsDoc.js";
  };

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
          <input type="checkbox" />I agree to the{" "}
          <a href="#" target="_blank" onClick={toTermDoc}>
            Terms & Conditions
          </a>
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
