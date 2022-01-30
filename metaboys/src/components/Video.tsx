import * as PropTypes from "prop-types";
import ImgVideo from "../assets/img/section/metaboys.png"
import Discord from '../assets/img/section/discord.png'
import DiscordHover from '../assets/img/section/discord_h.png'

import { transitions } from "../styles";
import '../assets/css/team.css'

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
}

const Video = () => {
  return (
    <section className="product-category section" id="the-video">
      <img alt="Video" src={ImgVideo}/>
      <div className="discord-logo">
        <div>
        <a target="_blank" href="https://discord.gg/meta3oys"><img src={Discord}/><img src={DiscordHover}/></a></div>
      </div>
    </section>
  );
};

// Header.propTypes = {
//   killSession: PropTypes.func.isRequired,
//   address: PropTypes.string,
// };

export default Video;
