import React from 'react'
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const inputValue = useSelector((state) => state.input.inputValue);

  return (
    <>
      <p className='showText'>Stored Data (Redux): {inputValue}</p>
    </>
  )
}

export default ComponentC
