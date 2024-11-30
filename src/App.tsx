import { useEffect, useMemo, useState } from "react";
import ParticlesComponent from "./components/ParticlesComponent";
import NavBar from "./components/NavBar";
import Demo from "./components/Demo";
import screenShot from "./assets/screen-shot.png";
import Support from "./components/Support";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import Divider from "./components/Divider";


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

        <div style={{border: "0px solid yellow", marginTop: "100px"}}>
          <div style={{height: "100px", position: !navTransform ? "fixed" : "relative", }}></div>
          <div style={{
            zIndex: 10, 
            textAlign: "center", 
            position: navTransform ? "fixed" : "relative", 
            top: "-1em", 
            // border: "1px solid red",
            transitionProperty: "transform, margin, top",
            transitionDuration: navTransform ? ".1s, .1s, .1s" : ".1s, .1s, 0s",
            transitionDelay: navTransform ? "0s, .1s, .1s" : "0s, 0s, 0s",
            // transition: ".5s width",
            // width: `${100 - getAdjustedScroll()}vw`, 
            width: navTransform ? "calc(0vw + 40px)" : "100vw",
            height: "100px", 
            transform: `scale(${navTransform ? ".3" : "1"})`,
            lineHeight: 1
          }}>
            
            <h1 style={{whiteSpace: "nowrap"}}>Microscopic View</h1>
   
          </div>
          
          <div style={{textAlign: "center"}}>
            <h2>A Webcam viewer optimized for USB Microscopes.</h2>
            <Divider />
            <Element name="about"></Element>
            <div style={{width: "100%", border: "0px solid yellow", display: "flex", justifyContent: "center"}}>
              <p style={{maxWidth: "800px", fontSize: "1.1em"}}>With the advent of cheap, but serviceable USB microscopes, came the need for a viewer that serves the needs of the people that work with them. These microscopes work just like a regular USB webcams, yet most webcam software is unsuitable for the job. The job is simple. We don't need to record video, we just need an unobtrusive viewer that can be resized, kept on top of other windows, and zoomed in and out. Microscopic View is built with Tauri 2.0 framework for cross platform compatibility, while retaining the speed and binary size of a native application.</p>
            </div>
            <img src={screenShot} style={{width: "860px", border: "1px solid #ffffff22", boxShadow: "1px 2px 10px black", borderRadius: "10px", margin: "20px 0px"}} />
          </div>
          <Divider />
          <Element name="demo"></Element>
          <Demo />
          <Divider />
          <Element name="support"></Element>
          <Support />
          <div style={{margin: "100px"}}></div>
          <Divider />

          
          <div style={{textAlign: "center", margin: "40px 0 60px 0"}}>
            <span>Written by Garrett Corbin &nbsp; x &nbsp; </span>
            <a href="https://jgarrettcorbin.com" target="_blank" rel="noreferrer">https://jgarrettcorbin.com</a>
          </div>
        </div>
      </div>
      <NavBar navTransform={navTransform} />
    </div>
  );
};