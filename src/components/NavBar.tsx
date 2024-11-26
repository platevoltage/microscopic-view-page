import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import { useEffect, useState } from "react";

interface Props {
  navTransform: boolean;
}

export default function NavBar({navTransform}:Props) {


  return (
    <div style={{
      position: "fixed", 
      top: 0, 
      left: 0, 
      right: 0, 
      height: "60px", 
      borderBottom: "4px solid #8800ff",
      backdropFilter: "blur(2px) invert(80%) hue-rotate(170deg) brightness(40%)",
      display: "flex",
      justifyContent: "center"
    }}>

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

      
      <div style={{border: "1px solid purple", display: "flex", justifyContent: "center", flexDirection: "column", position: "absolute", right: 0}}>
        <div style={{display: "flex"}}>
          <div style={{margin: "10px"}}><DescriptionIcon style={{marginBottom: "-6px"}} />About</div>
          <div style={{margin: "10px"}}><ContactSupportIcon style={{marginBottom: "-6px"}}/>Get Help</div>
          <div style={{margin: "10px"}}><DownloadIcon style={{marginBottom: "-6px"}}/>Download</div>
        </div>
      </div>
    </div>
  );
}
