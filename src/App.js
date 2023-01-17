import React, { useState } from 'react';
import BoxForm from './Components/BoxForm';
import DisplayBox from './Components/DisplayBox';
import styled from "styled-components";
import "./App.css"

const Contenedor = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  margin: 0 auto;
`;
function App() {
  const [currentBox, setCurrenBox] = useState(["black"]);
  const [dimencion, setDimencion] = useState([100]);
  const youhaveNewBox = (newColor, newDimencion) => {
    setCurrenBox((arr) => [...arr, newColor]);
    setDimencion((ar) => [...ar, newDimencion]);
  }

  return (
    <>
      {currentBox}
      {dimencion}
      <div className='App'>
        <BoxForm onNewBox={youhaveNewBox} />
        <Contenedor>
          {
            currentBox.map((color, i) => <DisplayBox key={i} color={color} dimenciones={dimencion[i]} />)
          }
        </Contenedor>
      </div>
    </>
  );
}

export default App;