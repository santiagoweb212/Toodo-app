import { useState } from "react";
import logo from "../img/contenedor-de-basura.png";
import styles from "./ContainerTarea.module.css";
export function ContainerTareas({ texto, index, dato, setDato }) {
  let style = {
    textDecoration: "none",
    display: "inline-flex",
    height: "2.5rem",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  };

  const [checked, setChecked] = useState(false);
  let handleChange = () => {
    checked == false ? setChecked(true) : setChecked(false);
  };
  if (checked == true) {
    style = {
      textDecoration: "line-through",
      display: "inline-flex",
      height: "2.5rem",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    };
  }
  let handleClick = (e) => {
    let deleteTask = dato.filter((value, index) => index !== +e.target.id);
    setDato(deleteTask);
  };

  return (
    <>
      <div className={styles.divContainer}>
        <input
          className={styles.input}
          onChange={handleChange}
          checked={checked}
          type="checkbox"
          name={texto}
          id={index}
        />
        <label style={style} htmlFor={index}>
          {texto}
        </label>
        <img
          className={styles.img}
          id={index}
          src={logo}
          alt=""
          onClick={handleClick}
        />
      </div>
      <br />
    </>
  );
}
