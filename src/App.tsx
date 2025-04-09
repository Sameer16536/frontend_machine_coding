import { useEffect, useState } from "react";
import { OTP } from "./components/OTP"
import ProgressBar from "./components/ProgressBar"
import Todo from "./components/Todo";
import Board from "./pages/Board";
import SearchComponent from "./components/SearchComponent";


function App() {
  // const [progress, setProgress] = useState(0);

  // useEffect(()=>{
  //   setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) {
  //         return 0;
  //       }
  //       return prev + 1;
  //     });
  //   }
  //   , 5000);
    
  // }, [])

  return (
    <div className="bg-gray-800 min-h-screen p-4">
      {/* <OTP/> */}
      {/* <ProgressBar progress={progress} /> */}
      {/* <Todo /> */}
      <SearchComponent />
      <Board />
    </div>
  )
}

export default App
