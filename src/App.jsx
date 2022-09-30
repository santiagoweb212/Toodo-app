import { StrictMode, useState } from "react";
import { ContainerTareas } from "./components/ContainerTareas";
import { InputTodo } from "./components/InputTodo";

export function App() {
  const [dato, setDato] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [btnState, setBtnState] = useState(true);
  let handleClick = () => {
    setDato([...dato, valueInput]);
    setValueInput("");
    setBtnState(true)
  };
  return (
    <StrictMode>
      <div className="divContainerMain">
      <div className="containerMain">
      <InputTodo
        valueInput={valueInput}
        setValueInput={setValueInput}
        eOnClick={handleClick}
        btnState={btnState}
        setBtnState={setBtnState}
        dato={dato}
        setDato={setDato}
      />
      <br />
      {dato.map((value, index) => (
        <ContainerTareas
          key={index}
          index={index}
          texto={value}
          dato={dato}
          setDato={setDato}
        />
      ))}
      
      </div>
      </div>
    </StrictMode>
  );
}
