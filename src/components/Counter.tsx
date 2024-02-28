import { useState } from "react";

import style from './Counter.module.scss'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <button className={style.btn} onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
  );
};

export default Counter;
