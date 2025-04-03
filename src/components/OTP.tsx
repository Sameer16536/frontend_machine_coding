import { useEffect, useRef, useState } from "react";
import "../App.css";
export const OTP = () => {
  const OTP_DIGITS_COUNT = 6;
  const [inputArray, setInputArray] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const refArray = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    refArray.current[0]?.focus();
  }, []);
  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) {
      return;
    }

    const newArray = [...inputArray];
    const newValue = value.trim();
    newArray[index] = newValue.slice(-1);
    setInputArray(newArray);
    if (newValue) refArray.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (
    e,
    index: number
  ) => {
    
    if (!e.target.value && e.key === "Backspace") {
      refArray.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      <h1>OTP</h1>
      <p>Enter the OTP sent to your email</p>
      {inputArray.map((input, index) => {
        return (
          <input
            type="text"
            key={index}
            className="otp-input"
            value={inputArray[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            ref={(input) => (refArray.current[index] = input)}
            onKeyDown={(e) => {
              handleOnKeyDown(e, index);
            }}
          />
        );
      })}
    </div>
  );
};
