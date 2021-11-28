import styled from 'styled-components';
import Img1 from '../img/image7.png';
import Img2 from '../img/image8.png';
import Img3 from '../img/image1.png';
import Img6 from '../img/image6.png';
import { useEffect } from "react";
import { Link , useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
  window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const Work2 = () => {
  return (
  <>
  <Header id="top">
    <Link to="/">
    <Direction></Direction>
    </Link>
    <Name>atsushi isai</Name>
  </Header>
  <Title>WORKS</Title>
  <TitleDes>制作実績など</TitleDes>
  <Content>
    <RowImg>
      <ImgCon>
        <img src={Img1} alt=""/>
      </ImgCon>
        <img src={Img2} alt=""/>
    </RowImg>
    <RowImg2>
      <LayTitle>
        <Title2>Musubu LP</Title2>
        <Text>説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト。</Text>
      </LayTitle>
      <LayTitle>
        <Title2>担当</Title2>
        <Text>説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト。</Text>
      </LayTitle>
    </RowImg2>
  </Content>
  <LayIcon>
    <LayWork>
      <img src={Img3} alt=""/>
      <MiddleTitle>Musubu</MiddleTitle>
      <MiddleDisc>Coding / React + Redux</MiddleDisc>
      <Direction2></Direction2>
    </LayWork>
    <LayWork>
      <img src={Img6} alt=""/>
      <MiddleTitle>Musubu</MiddleTitle>
      <MiddleDisc>Coding / React + Redux</MiddleDisc>
      <Direction2></Direction2>
    </LayWork>
  </LayIcon>
  <LayFooter></LayFooter>
  </>
  );
};


const Title = styled.h1`
  width: 100%;
  text-align:center;
  /* height: 50px */
`;

const TitleDes = styled.div`
  width: 100%;
  text-align:center;
  margin-bottom: 75px;
  /* height: 50px */
`;

const Header = styled.div`
  height:65px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const Content = styled.div`
display: flex;
`;

const Direction = styled.div`
  display: block;
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border-top: 6px solid #EF75BE;
  border-right: 6px solid #EF75BE;
  transform: rotate(-135deg);
  position: absolute;
  top: 20px;
  left: 5px;
`;

const Name = styled.div`
  position: absolute;
  top: 20px;
  left: 50px;
`;

const ImgCon = styled.div`
  margin: 0 20px;
`;

const RowImg = styled.div`
  margin: 0 10px;
  display: flex;
`;

const RowImg2 = styled.div`
  width:30%;
`;

const LayIcon = styled.section`
  margin-top: 80px;
  background-color: #F7F7F7;
  display:flex;
  width:100%;
  justify-content: center;
  align-items: center;
`;

const LayFooter = styled.section`
  background-color: #515151;
  height:64px;
  width:100%;
`;

const LayWork = styled.div`
  margin: 0 30px;
  margin-top: 114px;
  text-align:center;
`;

const MiddleDisc = styled.div`

`;

const MiddleTitle = styled.div`
  margin-top: 25px;
  font-weight: 700;
`;

const Text = styled.p`
  margin-left: 60px;
  font-family: "Roboto";
  font-size: 14px;
`;

const Direction2 = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 80px 10px 122px 10px;
  border-top: 6px solid #EF75BE;
  border-right: 6px solid #EF75BE;
  transform: rotate(45deg);
  margin-top: 80px;
`;

const Title2 = styled.h3`
  color:#0097A7;
  position:relative;
  display: inline-block;
  margin-left: 50px;
  &::after {
    content:"";
    display:block;
    width:410px;
    height:3px;
    background-color: #C4C4C4;
    font-size: 16px;
    position:absolute;
    bottom:-10px;
    left:0;
  };
`;

const LayTitle = styled.div`
`;