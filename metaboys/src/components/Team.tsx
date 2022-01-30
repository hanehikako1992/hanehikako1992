import * as PropTypes from "prop-types";

import '../assets/css/team.css'
import TeamMate from "./Teammate";
import alexei from '../assets/img/project/alexei.jpg'
import david from '../assets/img/project/david.jpg'
import hanehi from '../assets/img/project/hanehi.jpg'
import johnny from '../assets/img/project/johnny.jpg'
import jul from '../assets/img/project/jul.jpg'
import nick from '../assets/img/project/nick.jpg'
import sergey from '../assets/img/project/sergey.jpg'
import tarz from '../assets/img/project/tarz.jpg'

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
}

const Team = () => {
  const teamamtes = [
    { name: 'Alexei', position: 'The Artist Team Leader', 
      pic: alexei,
      description: "Instagram"},
    { name: 'David', position: 'The Blockchain Artist', 
    pic: david,
    description: '"Design is not just what it looks like..."'},
    { name: 'Tarz', position: 'The Studio', 
    pic: tarz,
    description: "The 3D team"},
    { name: 'Nick', position: 'The Discord Team Leader', 
    pic: nick,
    description: '"...The great teacher inspires."'},
    { name: 'Yamane', position: 'The Web3 Developer', 
    pic: hanehi,
    description: "The Japanese NFT Developer"},
    { name: 'Johnny', position: 'The Fashion Addict', 
    pic: johnny,
    description: "Always in the spotlight"},
    { name: '"Sergey"', position: 'The Tech Team Leader', 
    pic: sergey,
    description: '"Strive not to be a success, but rather to be of value."'},
    { name: 'Jul', position: 'The Marketing Leader', 
    pic: jul,
    description: "Strategy and fun"}
  ]
	
  return (
    <section className="product-category section" id="the-team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
            <h1 className="HeadingNow p-heading"><span>TEAM</span></h1>
            </div>
          </div>
        </div>
        <div className="row p-desc">
          <p>We have a background in new technologies for over 20 years with several works to its credit on blockchain in 2015, 2016, 2019 and 2021. We generated a total of more than 9 figures in different fields.</p>
          <p>We are experts in network and digital marketing for more than 10 years.</p>
        </div>
        <div className="row">
          {teamamtes.map((mate, i) => <TeamMate key={i} index={i} name={mate.name} position={mate.position} desc={mate.description} pic={mate.pic} />)}
        </div>
      </div>
    </section>
  );
};

// Header.propTypes = {
//   killSession: PropTypes.func.isRequired,
//   address: PropTypes.string,
// };

export default Team;
