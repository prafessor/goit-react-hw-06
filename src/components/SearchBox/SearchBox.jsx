import { useState } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
    
  // search function
  const handleChange = (evt) => {
    onChange(evt.currentTarget.value);
  };

  // reset input function
  const handleResetClick = () => {
    onChange("");
  };

  return (
    <div className={css.wrapper}>
      <p className={css.title}>Find contacts by name</p>
      <div className={css.field_wrapper}>
        <input
          className={css.field}
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button className={css.btn_reset} onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
}
