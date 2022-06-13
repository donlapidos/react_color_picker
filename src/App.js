import './index.css';
import Input from './Input';
import { useState } from "react";
import Display from './Display';

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValues, setHexValues] = useState("");
  const [darkText, setDarkText] = useState(true);
  return (
    <div className="App">

      <Display
        colorValue={colorValue}
        hexValues={hexValues}
        darkText={darkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValues={setHexValues}
        darkText={darkText}
        setDarkText={setDarkText}
      />

    </div>
  );
}

export default App;
