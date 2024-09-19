import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { useState, useEffect } from "react";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  let i = 0;

  useEffect(() => {
    //listener for changes to the screen size
    const mediaQuery = window.matchMedia(`(max-width: 500px)`);

    //set the initial value of isMobile
    setIsMobile(mediaQuery.matches);

    //define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //add the callback funtion as a listener for changes to the media query
    mediaQuery.addEventListener(`change`, handleMediaQueryChange);

    //remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener(`change`, handleMediaQueryChange);
    };
  }, []);

  console.log(isMobile);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        if (isMobile) {
          if (i <= 4) {
            ++i;
            return (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            );
          }
        } else {
          return (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
