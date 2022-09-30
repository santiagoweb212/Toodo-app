import { Component, StrictMode } from "react";
import logo from "../img/contenedor-de-basura.png";
import style from "./InputTodo.module.css";
//el estado del boton se cambia al ingresar un valor al input
export function InputTodo({
  valueInput,
  setValueInput,
  eOnClick,
  btnState,
  setBtnState,
}) {
  let handleOnchange = (e) => {
    setValueInput(e.target.value);
    e.target.value.length === 0 ? setBtnState(true) : setBtnState(false);
  };
  return (
    <StrictMode>
      <div className={style.divContainer}>
        <input
          className={style.input}
          type="text"
          value={valueInput}
          onChange={handleOnchange}
        />
        <button className={style.button} disabled={btnState} onClick={eOnClick}>
          añadir
        </button>
      </div>
    </StrictMode>
  );
}
