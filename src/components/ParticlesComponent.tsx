import { memo, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import testImage from "../assets/react.svg";
import testImage2 from "../assets/chip.svg";
import fingerPrint from "../assets/finger.svg";
import { Opacity } from "@mui/icons-material";


export const ParticlesComponent = memo(() => {
  return <ParticlesComponentX />;
});

export default ParticlesComponent;

function ParticlesComponentX() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const x: ISourceOptions = {
    background: {
      color: {
        value: "#0E2945",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#2Dc3D3",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.8,
        width: 1,
      },
      move: {
        direction: MoveDirection.bottomRight,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 30,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: ["image"],
        options: {
          image: [
            {
              src: testImage,
              width: 10,
              height: 10,
              replaceColor: true
            },
            {
              src: testImage2,
              width: 10,
              height: 10,
              replaceColor: true
            },
            {
              src: fingerPrint,
              width: 3,
              height: 4,
              replaceColor: true
            }
          ],
        }
      },
      size: {
        value: { min: 10, max: 80 },
      },
      rotate: {
        value: 45, // Start rotation angle (degrees)
        animation: {
          enable: true,
          speed: 4, // Rotation speed (higher is faster)
          sync: false, // All particles rotate at the same speed
        },
      },
      collisions: {
        enable: true,  // Enable collisions
      }
        
    },
    detectRetina: true,
    
  };

  const options: ISourceOptions = useMemo(() => (x),
    [],
  );

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        {/* <div style={{color: "white", position: "absolute", top: 0}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg"></img>
        </div> */}
        
      </>
    );
  }

  return <></>;
};