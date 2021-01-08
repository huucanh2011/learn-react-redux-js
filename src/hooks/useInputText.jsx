import { useState } from "react";

export function useInputText(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const clearValue = () => {
    setValue("")
  }
  return [{ value, onChange }, clearValue];
}
