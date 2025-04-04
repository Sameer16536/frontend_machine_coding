import { useEffect, useState } from "react";
import { OTP } from "./components/OTP"
import ProgressBar from "./components/ProgressBar"


function App() {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }
    , 5000);
    
  }, [])

  return (
    <>
      <OTP/>
      <ProgressBar progress={progress} />
    </>
  )
}

export default App
