import { useEffect, useMemo, useState } from "react";
import ParticlesComponent from "./components/ParticlesComponent";
import NavBar from "./components/NavBar";



export default function App() {
  const [ navTransform, setNavTransform ] = useState(false);
  const [ scrollY, setScrollY ]= useState<number>(0);

  useEffect(() => {
    const logScroll = () => {
      // console.log(window.scrollY);
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", logScroll);
    
    return () => {
      window.removeEventListener("scroll", logScroll);
    };
  }, []);

  useEffect(() => {
    if (!navTransform && window.scrollY > 80) {
      console.log("fold");
      setNavTransform(true);
    } else if (navTransform && window.scrollY <= 80) {
      console.log("unfold");
      setNavTransform(false);
    }
  }, [scrollY, navTransform]);
  
  // function getAdjustedScroll() {
  //   let adjusted = 0;
  //   adjusted = scrollY/2 - 80;
  //   if (adjusted < 0) {
  //     adjusted = 0;
  //   }
  //   return adjusted;
  // }

  // function getScale() {
  //   let x = scrollY;
  //   if (x > 100) x = 100;
  //   if (navTransform) {
  //     x = (160 - x)/100;
  //   }
  //   if (!navTransform) {
  //     x = (160 - x)/100;
  //   }
  //   return x;
  // }


  return (
    <div style={{overflow: "scroll"}}>
      <ParticlesComponent />
      <div style={{position: "absolute", top: 0, left: 0, right: 0}}>
        <div style={{border: "0px solid yellow", marginTop: "80px"}}>
          <div style={{
            zIndex: 10, 
            textAlign: "center", 
            position: navTransform ? "fixed" : "relative", 
            top: 0, 
            // border: "1px solid red",
            transitionProperty: "transform, margin, top",
            transitionDuration: navTransform ? ".1s, .1s, .1s" : ".1s, .1s, 0s",
            transitionDelay: navTransform ? "0s, .1s, .1s" : "0s, 0s, 0s",
            // transition: ".5s width",
            // width: `${100 - getAdjustedScroll()}vw`, 
            width: navTransform ? "0vw" : "100vw",
            height: "60px", 
            transform: `scale(${navTransform ? ".5" : "1"})`,
            lineHeight: 1
          }}>
            <h1 style={{whiteSpace: "nowrap"}}>Microscopic View</h1>
          </div>

          <p>

          fd
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
          fd
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
          fd
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
          fd
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
            <br />
          ds
          </p>

        </div>
      </div>
      <NavBar navTransform={navTransform} />
    </div>
  );
};