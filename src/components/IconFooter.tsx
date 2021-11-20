import styled from 'styled-components';
import Img1 from '../img/facebook.png';
import Img2 from '../img/insta.png';
import Img3 from '../img/twitter.png';


export const IconFooter = () => {
    return (
        <>
        <LayIcon>
            <RowImg>
            <Img src={Img1}></Img>
            <Img src={Img2}></Img>
            <Img src={Img3}></Img>
            </RowImg>
        </LayIcon>
        <LayFooter></LayFooter>
        </>
    );
};

const LayIcon = styled.section`
    background-color: #F7F7F7;
    display:flex;
    height:280px;
    width:100%;
`;

const LayFooter = styled.section`
    background-color: #515151;
    height:64px;
    width:100%;
`;

const RowImg = styled.div`
    margin: auto;
`;

const Img = styled.img`
    height:40px;
    width:40px;
    margin: 15px;
`;