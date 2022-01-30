import ImgGradient from "../assets/img/gradient.svg"

import Project from './Project'

import { getChainData } from "../helpers/utilities";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Video from "./Video";
import Faq from "./Faq";

interface ISectionProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
}

const Section = (props: ISectionProps) => {
  const { connected, address, chainId, killSession } = props;
  const chainData = chainId ? getChainData(chainId) : null;
  return (
    <section id="main-section">
      <img className="main-gradient" alt="Gradient" src={ ImgGradient } />
      <Project />
      <Roadmap />
      <Team />
      <Video />
      <Faq />
    </section>
  );
};

export default Section;
