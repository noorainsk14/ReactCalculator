import Display from "./components/Display";
import Styles from "./App.module.css";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [calVal, setCalval] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      //const finalresult = calVal + "=" + eval(calVal);
      setCalval(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalval(newDisplayValue);
    }
  };

  return (
    <>
      <center>
        <h2>MY CALCULATOR</h2>
        <div className={Styles.calculator}>
          <Display displayValue={calVal} />
          <Buttons onButtonClick={onButtonClick} />
        </div>
      </center>
    </>
  );
}

export default App;
