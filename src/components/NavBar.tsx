import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import { useEffect, useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

interface Props {
  navTransform: boolean;
}

export default function NavBar({navTransform}:Props) {

  const bgStyle: React.CSSProperties = {
    position: "absolute", 
    top: 0, 
    width: "100%",
    // left: 0, 
    // right: 0, 
    height: navTransform ? "10px" : "2px", 
    // borderBottom: navTransform ? "4px solid #2D83D3" : "0px solid #2D83D3",
    // transitionDelay: navTransform ? ".5s" : "0s",
    // transition: ".2s all",
    // transitionDelay: ".1s",
    transitionProperty: "left, height",
    transitionDuration: ".5s, .3s",
    transitionDelay: "0s, .5s",
    left: navTransform ? "0vw" : "100vw",
    backdropFilter: "blur(2px) hue-rotate(200deg) invert(100%)  brightness(12%)",
    // display: "flex",
    // justifyContent: "center"
  };

  return (
    <div style={{
      position: "fixed", 
      top: 0, 
      left: 0, 
      right: 0, 
      height: "60px", 
    }}>
      <div style={{...bgStyle, top: 0, transitionDelay: !navTransform ? ".1s" : ".6s, .6s"}}></div>
      <div style={{...bgStyle, top: 10, transitionDelay: !navTransform ? ".1s" : ".5s, .5s"}}></div>
      <div style={{...bgStyle, top: 20, transitionDelay: !navTransform ? ".1s" : ".4s, .4s"}}></div>
      <div style={{...bgStyle, top: 30, transitionDelay: !navTransform ? ".1s" : ".3s, .3s"}}></div>
      <div style={{...bgStyle, top: 40, transitionDelay: !navTransform ? ".1s" : ".2s, .2s"}}></div>
      <div style={{...bgStyle, top: 50, transitionDelay: !navTransform ? ".1s" : ".1s, .1s"}}></div>
      {/* <h1 style={{
        margin: navTransform ? "-16px 100% 0px 0%" : "-16px 50% 0px 50%",
        width: "7.9em",
        // position: navTransform ? "absolute" : "relative",
        position: "absolute",
        transitionProperty: "opacity, margin, transform",
        transitionDuration: navTransform ? ".1s, .1s, .1s" : ".1s, .1s, 0s",
        transitionDelay: navTransform ? "0s, .1s, .1s" : ".1s, 0s, 0s",
        opacity: navTransform ? 1 : 0,
        transform: `scale(${navTransform ? .5 : 1}) translate(${navTransform ? "280px, 0px" : "0px, 0px"})`
        // left: navTransform ? "0px" : "500px"

      }}>
          Microscopic View
      </h1> */}

      
      <nav style={{border: "0px solid purple", display: "flex", justifyContent: "center", flexDirection: "column", position: "absolute", right: 20}}>
        <div style={{display: "flex"}}>
          <Link to="about" smooth={true} offset={-100}>
            <button style={{margin: "10px"}}><DescriptionIcon style={{margin: "-6px 4px"}} />About</button>
          </Link>
          <Link to="support" smooth={true} offset={-70}>
            <button style={{margin: "10px"}}><ContactSupportIcon style={{margin: "-6px 4px"}}/>Get Help</button>
          </Link>
          <Link to="demo" smooth={true} offset={-70}>
            <button style={{margin: "10px"}}><DownloadIcon style={{margin: "-6px 4px"}}/>Download</button>
          </Link>
          <Link to="demo" smooth={true} offset={-70}>
            <button style={{margin: "10px"}}><LaptopWindowsIcon style={{margin: "-6px 8px"}}/>Live Demo</button>
          </Link>
        </div>
      </nav>
      <div style={{
        backgroundColor: "#2D83D3", 
        height: "4px",
        position: "absolute", 
        bottom: 0, 
        width: "100vw", 
        transitionDelay: ".1s",
        transition: ".2s all",
        left: navTransform ? "0vw" : "100vw"
      }}></div>
    </div>
  );
}
