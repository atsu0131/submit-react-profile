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
            <img src={Img2} alt=""/>
            <img src={Img3} alt=""/>
            <img src={Img4} alt=""/>
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

const ImgRow = styled.div`
    display:flex;
    justify-content: center;
`;