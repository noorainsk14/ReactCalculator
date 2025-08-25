import Styles from "./Buttons.module.css";

export default function Buttons({ onButtonClick }) {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={Styles.buttonContainer}>
        {buttons.map((btn) => (
          <button
            key={btn}
            className={Styles.button}
            onClick={() => onButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
}
