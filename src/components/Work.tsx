import styled from 'styled-components';
import Img2 from '../img/image2.png';
import Img3 from '../img/image3.png';
import Img4 from '../img/image4.png';
import "../Career.css"

export const Work = () => {
    return (
        <>
        <Title>WORKS</Title>
        <TitleDes>制作実績など</TitleDes>
        <ImgRow>
            <LayWork>
            <img src={Img2} alt=""/>
            <MiddleTitle>Musubu LP</MiddleTitle>
            <MiddleDisc>Coding / Gatsby</MiddleDisc>
            <Direction>aaaa</Direction>
            </LayWork>
            <LayWork>
            <img src={Img3} alt=""/>
            <MiddleTitle>Musubu LP</MiddleTitle>
            <MiddleDisc>Coding / Gatsby</MiddleDisc>
            <Direction>aaaa</Direction>
            </LayWork>
            <LayWork>
            <img src={Img4} alt=""/>
            <MiddleTitle>Musubu LP</MiddleTitle>
            <MiddleDisc>Coding / Gatsby</MiddleDisc>
            <Direction>aaaa</Direction>
            </LayWork>
        </ImgRow>

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
    /* height: 50px */
`;

const LayWork = styled.div`
text-align:center;
`;

const MiddleDisc = styled.div`

`;

const MiddleTitle = styled.div`

`;

const Direction = styled.div`

`;

const ImgRow = styled.div`
    display:flex;
    justify-content: center;
`;