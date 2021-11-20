import styled from 'styled-components';
import { Link } from "react-router-dom";
import Img1 from '../img/image7.png';
import Img2 from '../img/image8.png';
import Img3 from '../img/image4.png';
import Img4 from '../img/image4.png';
import Img5 from '../img/image4.png';
import img from '../img/Vector.png';

export const Work2 = () => {
    return (
        <>
        <Header>
            <Link to="/">
                <Direction></Direction>
            </Link>
            <Name>atsushi isai</Name>
        </Header>
        <Title>WORKS</Title>
        <TitleDes>制作実績など</TitleDes>
        <Content>
            <RowImg>
                <img src={Img1} alt=""/>
                <img src={Img2} alt=""/>
            </RowImg>
            <RowImg2>
            <LayTitle>
                <Title2>SKILL</Title2>
                <p>説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト。</p>
            </LayTitle>
            <LayTitle>
                <Title2>SKILL</Title2>
                <p>説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト。</p>
            </LayTitle>
            </RowImg2>
        </Content>
        <LayIcon>
            <LayWork>
                <img src={Img4} alt=""/>
                <MiddleTitle>Musubu LP</MiddleTitle>
                <MiddleDisc>Coding / Gatsby</MiddleDisc>
                <Direction2></Direction2>
            </LayWork>
            <LayWork>
                <img src={Img4} alt=""/>
                <MiddleTitle>Musubu LP</MiddleTitle>
                <MiddleDisc>Coding / Gatsby</MiddleDisc>
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
    /* margin-bottom: 50px; */
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

const RowImg = styled.div`

`;

const RowImg2 = styled.div`
    width:30%;
`;

const LayIcon = styled.section`
    background-color: #F7F7F7;
    display:flex;
    width:100%;
`;

const LayFooter = styled.section`
    background-color: #515151;
    height:64px;
    width:100%;
`;

const Img = styled.img`
    margin: 15px;
`;

const LayWork = styled.div`
    margin: 0 30px;
    text-align:center;
`;

const MiddleDisc = styled.div`

`;

const MiddleTitle = styled.div`
    margin-top: 10px;
    font-weight: 700;
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

    &::before{
        content: url(${img});
        vertical-align: middle;
        padding-right: 10px;
        margin-left: 30px;
    }
    &::after {
        content:"";
        display:block;
        width:410px;
        height:3px;
        background-color: #C4C4C4;
        font-size: 16px;
        position:absolute;
        bottom:-10px;
        left:50px;
    };
`;

const LayTitle = styled.div`
`;