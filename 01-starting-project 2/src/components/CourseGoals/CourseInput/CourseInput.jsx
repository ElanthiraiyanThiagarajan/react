import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const DIV = styled.div`
//   margin: 0.5rem 0;
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.isInputValid ? 'red' : 'black')};
//   }
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.isInputValid ? 'red' : '#ccc')};
//     background: ${props => (props.isInputValid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    let goalInputValue = event.target.value;
    if (goalInputValue.length > 0) {
      setEnteredValue(goalInputValue);
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsInputValid(false);
      return;
    }
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isInputValid && styles.isInputValid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
