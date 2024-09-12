import { useEffect } from "react"
import { useState } from "react"


const Light = () => {
  const [currentLight, setCurrentLight] = useState("green")

  useEffect(() => {
    let timer; 
    if (currentLight === "green") {
      timer = setTimeout(() => setCurrentLight("yellow"), 4000);
    } else if (currentLight === "yellow") {
      timer = setTimeout(() => setCurrentLight("red"), 6000);
    } else if (currentLight === "red") {
      timer = setTimeout(() => setCurrentLight("green"), 8000);
    }

    return()=> clearTimeout(timer)
  }, [currentLight]) 

  return (
    <div
      style={{
        border: "2px solid black",
        width: "150px",
        margin: "150px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: currentLight === "green" ? "green" : "black",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: currentLight === "yellow" ? "yellow" : "black",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: currentLight === "red" ? "red" : "black",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
}

export default Light


