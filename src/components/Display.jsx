import Styles from "./Display.module.css";

export default function Display({ displayValue }) {
  return (
    <>
      <input
        type="text"
        className={Styles.input}
        value={displayValue}
        readOnly
      />
    </>
  );
}
