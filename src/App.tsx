import { useEffect, useMemo, useState } from "react";
import ParticlesComponent from "./components/ParticlesComponent";
import NavBar from "./components/NavBar";
import Demo from "./components/Demo";
import screenShot from "./assets/screen-shot.png";



export default function App() {
  const [ navTransform, setNavTransform ] = useState(false);
  const [ scrollY, setScrollY ]= useState<number>(0);
  const [ submitting, setSubmitting ] = useState(false);

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
            <img src={screenShot} style={{width: "860px", border: "1px solid #ffffff22", boxShadow: "1px 2px 10px black", borderRadius: "10px", margin: "20px 0px"}} />
          </div>
          
          
          <Demo />
          
          <div className="form-container">
            <h2>Support Form</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                const form = e.target as HTMLFormElement;

                // Collect form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
        
                try {
                // Submit using fetch
                  const response = await fetch("https://formsubmit.co/ajax/2c6bbb4c141e8f4a53d165f507d52c8e", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });
        
                  if (response.ok) {
                    alert("Form submitted successfully!");
                  } else {
                    alert("Failed to submit the form.");
                  }
                } catch (error) {
                  console.error("Error submitting form:", error);
                  alert("An error occurred. Please try again later.");
                } finally {
                  setSubmitting(false);
                  form.reset();
                }
              }}
            >
              <div className="form-group">
                <label htmlFor="subject">Subject :</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">How Can We Help? :</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Name :</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <button type="submit" disabled={submitting}>{submitting ? "Please Wait...": "Submit"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NavBar navTransform={navTransform} />
    </div>
  );
};