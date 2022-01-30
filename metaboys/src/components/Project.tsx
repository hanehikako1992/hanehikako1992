import * as React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import Blockie from "./Blockie";
import Banner from "./Banner";

import ImgProject from "../assets/img/project/img.png"
import Marquee from "react-fast-marquee";
import FadeIn from 'react-fade-in';

import metaboys from '../assets/img/marquee .png'
import '../assets/css/project.css'
import LogoMarquee from "./LogoMarquee";

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
}

const Project = () => {
  return (
    <section className="product-category section" id="the-projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title text-center">
                    <h1 className="HeadingNow p-heading"><span>THE PROJECT</span></h1>
                    </div>
                </div>
                
                <div className="col-7" style={{position: "relative"}}>
                    <div className="project-back">
                      <img alt="Project" src={ImgProject}/>
                    </div>
                    <FadeIn>
                    <div className="p-desc e-ukraine category-box project-content">
                    <p>
                        MetaBoys represents a NFT collection of <b>7777</b> fashion boys
                        categorized in different levels of rarity. These are stored on
                        the Ethereum blockchain and hosted on IPFS. They boast the first
                        collection of high-quality <b>3D human</b> models, and have a
                        range of styles, expressions, outfits, and over 200 other
                        features.
                    </p>

                    <p>
                        MetaBoys also contains the most stylish avatars in the
                        Metaverse.
                    </p>

                    <p>
                        Each NFT provides access to the world's most exclusive business
                        community, where dedicated entrepreneurs and investors, wanting
                        to learn from the best in their fields can be found.
                    </p>

                    <p>
                        The community plays host to all NFT enthusiasts,
                        Crypto-currency, investments, among others. Here, access to
                        exclusive information, networking events, masterminds in the
                        world's largest cities, and renowned guests are just part of the
                        package.
                    </p>
                    </div></FadeIn>
                </div>
            </div>
        </div>
        <LogoMarquee />
    </section>
  );
};

// Header.propTypes = {
//   killSession: PropTypes.func.isRequired,
//   address: PropTypes.string,
// };

export default Project;
