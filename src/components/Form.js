import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  setError,
  error
}) => {
  const useStyles = makeStyles(() => ({
    root: {
      width: "50%",
      margin: "0 auto"
    }
  }));
  const classes = useStyles();
  const inputTextHandler = (e) => {
    console.log("logging", e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    //when we hit the '+' it refreshes the page ..that is not our requirement thats y we use prevent default
    e.preventDefault();
    if (inputText.trim() === "") {
      console.log("its working");
      setError(true);
    } else {
      setError(false);
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 }
      ]);
      console.log("todo value", todos);
      setInputText(""); //to reset the input text to ""
    }
    // if(e.target.value===undefined && e.key==='Enter')
    // {
    //     // SetError(true)
    //     if(inputText.trim()==='')
    //     {
    //         console.log('inner if');
    //         SetError(true)
    //     }

    // }
    // else
    // {
    //      SetError(false)
    // setTodos([
    //     ...todos,{text:inputText,completed:false,id:Math.random()*1000}
    // ])
    // console.log('todo value',todos);
    // setInputText("") //to reset the input text to ""
    // }
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <React.Fragment>
      {error && (
        <div className={classes.root}>
          <Alert severity="warning">Enter some details</Alert>
        </div>
      )}
      <form>
        <input
          onChange={inputTextHandler}
          onSubmit={submitTodoHandler}
          type="text"
          name="to_do_name"
          className="todo-input"
          value={inputText}
        ></input>
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todo" className="filter-todo" onChange={statusHandler}>
            <option value="all"> All </option>
            <option value="completed"> completed </option>
            <option value="uncompleted"> uncompleted </option>
          </select>
        </div>
      </form>
    </React.Fragment>
  );
};
export default Form;
