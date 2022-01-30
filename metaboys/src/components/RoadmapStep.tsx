import * as PropTypes from "prop-types";

import FadeIn from 'react-fade-in';
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import ChangingProgressProvider from "../providers/ChangingProgressProvider";

import '../assets/css/roadmap.css'

interface IRoadmapStepProps {
  index: number;
  title: string;
  content: string;
}

const RoadmapStep = (props: IRoadmapStepProps) => {
  const { index , title, content } = props;
  const percentage = (index-1)*20
  return (
    <FadeIn>
    <div className={`roadmap-item rd-item-${index} ${index%2 === 0 ? 'mleft' : 'mright'}`}>
      <span className="p-roadmap-num index">{index}</span>
      <div>
        <div className={`c-loading loading-${index}`}>
        <ChangingProgressProvider values={[0, percentage]}>
          {(percentage:number) => 
          (<CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#ffffff",
              pathColor: percentage===100 ? "#00FF38":"#FF007A",
              trailColor: "#141414",
              backgroundColor: "transparent",
              pathTransition: percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
            })}
          />)}
        </ChangingProgressProvider>
        </div>
        <h1 className="p-title HeadingNow">{title}</h1>
        <p className="p-desc e-ukraine">{content} </p>
      </div>
    </div>
    </FadeIn>
  );
};

RoadmapStep.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default RoadmapStep;
