import styled from 'styled-components';
import Img1 from '../img/bike.png';
import Img2 from '../img/study.png';
import Img3 from '../img/iot.png';
import Img4 from '../img/Vector.png';
import Img5 from '../img/blog.png';
import Img6 from '../img/interest.png';

export const Activity = () => {
    return (
        <>
        <Section1>
        <BigTitle>ACTIVITY</BigTitle>
        <TitleDes>活動</TitleDes>
        </Section1>
        <Section>
            <Content>
                <Title>BLOG</Title>
                <BlogWrap>
                <Dl>
                    <Dt>2019.09.21</Dt>
                    <Dd>Google Developer Group ミートアップ in 京都</Dd>
                </Dl>
                <Dl>
                    <Dt>2019.09.16</Dt>
                    <Dd>久しぶりに自転車に乗った</Dd>
                </Dl>
                <Dl>
                    <Dt>2019.02.20</Dt>
                    <Dd>Raspbery Pi でスマートホームハブを構築：Hass.io</Dd>
                </Dl>
                <Dl>
                    <Dt>2019.01.01</Dt>
                    <Dd>新年のご挨拶 と 新天地</Dd>
                </Dl>
                </BlogWrap>
            </Content>

            <Content>
                <Title2>INTERREST</Title2>
                <ImgRow>
                <LayInterest>
                    <img src={Img1} alt=""/>
                    <LayInterestTitle>自転車</LayInterestTitle>
                    <LayInterestDesc>MTB</LayInterestDesc>
                </LayInterest>
                <LayInterest>
                    <img src={Img2} alt=""/>
                    <LayInterestTitle>勉強会</LayInterestTitle>
                    <LayInterestDesc>GAS</LayInterestDesc>
                    <LayInterestDesc>GDG Kyoto</LayInterestDesc>
                </LayInterest>
                <LayInterest>
                    <img src={Img3} alt=""/>
                    <LayInterestTitle>IoT</LayInterestTitle>
                    <LayInterestDesc>VUI</LayInterestDesc>
                    <LayInterestDesc>Google Home</LayInterestDesc>
                    <LayInterestDesc>Raspberry Pi</LayInterestDesc>
                </LayInterest>
                </ImgRow>
            </Content>
        </Section>
        </>
    );
};

const Section = styled.section`
    display:flex;

`;

const BlogWrap = styled.div`
    margin: 0 10%;
`;

const LayInterest = styled.div`
    margin: 0 15px;
`;

const LayInterestTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 700;
`;

const LayInterestDesc = styled.div`
    text-align: center;
    font-weight: 400;
    margin-bottom: 5px;
`;

const Dl = styled.dl`
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
`;

const Dt = styled.dt`
    font-weight: 500;
`;

const Dd = styled.dd`
    font-weight: 700;
    color:#EF75BE;
`;

const Content = styled.div`
width:50%;
`;

const Section1 = styled.div`
    margin-top: 122px;
    width:100%;
`;

const BigTitle = styled.h1`
    width: 100%;
    text-align:center;
    /* height: 50px */
`;

const TitleDes = styled.div`
    width: 100%;
    text-align:center;
    margin-bottom: 50px;
    /* height: 50px */
`;

const ImgRow = styled.div`
    margin-top: 20px;
    display:flex;
    margin-left: 40px;
    margin-bottom: 86px;
`;

const Title = styled.h3`
    color:#0097A7;
    position:relative;
    display: inline-block;

    &::before{
        content: url(${Img5});
        vertical-align: middle;
        padding-right: 10px;
        margin-left: 30px;
    }
    &::after {
        content:"";
        display:block;
        width:520px;
        height:3px;
        background-color: #C4C4C4;
        font-size: 16px;
        position:absolute;
        bottom:-10px;
        left:50px;
    };
`;


const Title2 = styled.h3`
    color:#0097A7;
    position:relative;
    display: inline-block;

    &::before{
        content: url(${Img6});
        vertical-align: middle;
        padding-right: 10px;
        margin-left: 30px;
    }
    &::after {
        content:"";
        display:block;
        width:520px;
        height:3px;
        background-color: #C4C4C4;
        font-size: 16px;
        position:absolute;
        bottom:-10px;
        left:50px;
    };
`;

