import { useState } from "react";

export function useInputText(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const clearValue = () => {
    setValue("")
  }
  return [{ value, onChange }, clearValue];
}
