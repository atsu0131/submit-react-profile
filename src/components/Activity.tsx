import styled from 'styled-components';
import img from '../img/Vector.png';

export const Activity = () => {
    return (
        <>
        <Section1>
        <BigTitle>ACTIVITY</BigTitle>
        <TitleDes>活動</TitleDes>
        </Section1>
        <Section>

        <Content>
            <Title>SKILL</Title>


        </Content>

        <Content>
            <Title>SKILL</Title>


        </Content>

        </Section>
        </>
    );
};

const Section = styled.section`
    display:flex;

`;

const Content = styled.div`
width:50%;
`;

const Section1 = styled.div`
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
    /* height: 50px */
`;

const ImgRow = styled.div`
    display:flex;
    justify-content: center;
`;

const Title = styled.h3`
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
        width:520px;
        height:3px;
        background-color: #C4C4C4;
        font-size: 16px;
        position:absolute;
        bottom:-10px;
        left:50px;
    };
`;