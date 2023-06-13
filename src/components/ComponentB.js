import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inpChange } from '../actions/index';

const ComponentB = () => {

  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.inputValue);

  const handleInpChange = (e) => {
    dispatch(inpChange(e.target.value));
  }

  return (
    <>
      <input type="text" name="name" autoComplete="off" onChange={handleInpChange} value={inputValue} className="inpText" />
    </>
  );
};

export default ComponentB;
