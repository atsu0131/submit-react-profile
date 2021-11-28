import styled from 'styled-components';
import Img2 from '../img/image2.png';
import Img3 from '../img/image3.png';
import Img4 from '../img/image4.png';
import "../Career.css"
// import { Link } from "react-router-dom";

export const Work = () => {
  return (
  <>
  <Title>WORKS</Title>
  <TitleDes>制作実績など</TitleDes>
  <ImgRow>
    <LayWork>
      <a href="/work">
      <img src={Img2} alt=""/>
      <MiddleTitle>Musubu LP</MiddleTitle>
      <MiddleDisc>Coding / Gatsby</MiddleDisc>
      <Direction></Direction>
      </a>
    </LayWork>
    <LayWork>
      <img src={Img3} alt=""/>
      <MiddleTitle>Musubu LP</MiddleTitle>
      <MiddleDisc>Coding / Gatsby</MiddleDisc>
      <Direction></Direction>
      </LayWork>
    <LayWork>
      <img src={Img4} alt=""/>
      <MiddleTitle>Musubu LP</MiddleTitle>
      <MiddleDisc>Coding / Gatsby</MiddleDisc>
      <Direction></Direction>
    </LayWork>
  </ImgRow>

  </>
  );
};

const Title = styled.h1`
  width: 100%;
  text-align:center;
  /* height: 50px */
  margin-top: 122px;
`;

const TitleDes = styled.div`
  width: 100%;
  text-align:center;
  margin-bottom: 50px;
  /* height: 50px */
`;

const LayWork = styled.div`
  margin: 0 30px;
  text-align:center;
`;

const MiddleDisc = styled.div`

`;

const MiddleTitle = styled.div`
  margin-top: 25px;
  font-weight: 700;
`;

const Direction = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 80px 10px 122px 10px;
  border-top: 6px solid #EF75BE;
  border-right: 6px solid #EF75BE;
  transform: rotate(45deg);
  margin-top: 80px;
`;

const ImgRow = styled.div`
  display:flex;
  justify-content: center;
`;