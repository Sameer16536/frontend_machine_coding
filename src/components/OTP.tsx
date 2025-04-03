import { useEffect, useRef, useState } from "react";
import  "../App.css";
export const OTP = () => {
    const OTP_DIGITS_COUNT = 6
    const [inputArray, setInputArray] = useState(new Array(OTP_DIGITS_COUNT).fill(""));

    const refArray = useRef<(HTMLInputElement | null)[]>([]); 
    useEffect(()=>{
        refArray.current[0]?.focus()
        
    },[])
    const handleChange = (value:string,index:number) => {
        if (isNaN(Number(value))) {
            return
        }
        console.log(value,index)
        const newArray = [...inputArray]
        newArray[index] = value.slice(-1)
        setInputArray(newArray)
        refArray.current[index + 1]?.focus(); 
    }
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
                />
            );
        })}
    </div>
  );
}