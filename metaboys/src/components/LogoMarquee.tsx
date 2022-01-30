import * as React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";

import Marquee from "react-fast-marquee";

import '../assets/css/project.css'

const LogoMarquee = () => {
  return (
    <Marquee speed={90} direction="right" className="p-marquee">
        <div className="p-mar"/>
        <div className="p-mar"/>
        <div className="p-mar"/>
        <div className="p-mar"/>
        <div className="p-mar ok"/>
    </Marquee>
  );
};

export default LogoMarquee;
