import styled from 'styled-components';
import { Header } from "./Header";
import { Work } from "./Work";
import { Career } from "./Career";
import { Skill } from "./Skill";
import { Activity } from "./Activity";
import { IconFooter } from "./IconFooter";
// import { Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';


export const First = () => {
  return (
    <>
      <Header />
      <Work />
      <Career />
      <Skill />
      <Activity />
      <IconFooter />
      <Scroll to="top" smooth={true} duration={600}>
        <Circle>
          <TopDirection></TopDirection>
        </Circle>
      </Scroll>

    </>
  );
};

const TopDirection = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  border-top: 6px solid #FFF;
  border-right: 6px solid #FFF;
  transform: rotate(-45deg);
  position: absolute;
  top: 25px;
  left: 20px;
`;

const Circle = styled.div`
  cursor: pointer;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #EF75BE;
  position: relative;
  position: fixed;
  bottom: 25px;
  right: 20px;
`;