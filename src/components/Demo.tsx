import { useState } from "react";

export default function Demo() {
  const [ isRunning, setIsRunning ] = useState(false);

  return (
    <>
      <h2>In Browser Demo.</h2>
      <div style={{display: "flex", justifyContent: "center", marginTop: "20px", position: "relative", height: isRunning ? "500px" : "100px", transition: ".4s height"}}>
        {isRunning ?
          <div style={{width: "860px", height: isRunning ? "500px" : "100px", position: "relative", borderRadius: "10px", transition: ".4s height", overflow: "hidden"}}>
            <iframe src="/demo/index.html" style={{ width: "100%", height: "100%", borderRadius: "10px", border: "1px solid #ffffff22", boxShadow: "1px 2px 10px black"}}></iframe>
            <button style={{border: "0px solid white", padding: "5px 10px", position: "absolute", left: 5, top: 5, width: "60px", fontSize: ".8em"}} onClick={() => setIsRunning(false)}>Close</button>
          </div>
          :
          <div style={{width: "860px", borderRadius: "10px", backgroundColor: "#000000", display: "flex", justifyContent: "center", border: "1px solid #ffffff22", boxShadow: "1px 2px 10px black"}}>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
              <button style={{border: "1px solid white", padding: "10px 20px"}} onClick={() => setIsRunning(true)}>Start Demo</button>
            </div>
          </div>
        }
      </div>
    </>
  );
}
