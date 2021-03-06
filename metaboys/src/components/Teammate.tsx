import * as PropTypes from "prop-types";

import { transitions } from "../styles";
import '../assets/css/roadmap.css'

interface ITeammateProps {
  index: number;
  name: string;
  position: string;
  desc: string;
  pic: any;
}

const TeamMate = (props: ITeammateProps) => {
  const { index, name , position, desc, pic } = props;
  return (
    <div className="col-md-3 col-sm-4 col-6 team-item">
        <div className="card-img-top">
            <img src={pic} alt="" className="w-100"/>
        </div>
        <div className="m-card m-shadow">
            <div className="card-text">
                <span className="p-team-name">{name}<br/></span><span className="p-team-pos">{position}</span>
                <hr />
                <span className="p-team-desc">{index===0?<a href="https://www.instagram.com/alexei_shelkov/">{desc}</a>:desc}</span>
            </div>
        </div>
        <span style={{animationName: `example${index+1}`}}></span>
    </div>
  );
};

TeamMate.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  position: PropTypes.string,
  desc: PropTypes.string,
  pic: PropTypes.any,
};

export default TeamMate;
