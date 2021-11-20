import styled from 'styled-components';
import img from '../img/Vector.png';

export const Career = () => {
    return (
        <>
        <Section>
            <Content>
            <Title>EXPERIENCE</Title>
            <dl>
                <Dd>
                    <CareerTitle>フロントエンジニア | 2019.01- </CareerTitle>
                    <CareerTitle>ベースコネクト株式会社</CareerTitle>
                </Dd>
                <Dd2>
                    <CareerTitle>ウェブデザイナー | 2008.08 - 2018.12</CareerTitle>
                    <CareerTitle>株式会社 クエステトラ</CareerTitle>
                    <p>SaaS ワークフローシステムのサービス開発ベンチャー。 サービス立ち上げに参画。 UI/UXの改善に取り組んだ。</p>
                </Dd2>
                <Dd4>

                    <CareerTitle>ウェブデザイナー | 2000.04 - 2008.10 </CareerTitle>
                    <CareerTitle>株式会社 アートスタッフ</CareerTitle>
                    <p>大学などの教育関連向けに、広報サイト、システムを製作、開発。</p>
                </Dd4>
                <Dd3>
                    <CareerTitle>デザイナー | 1994.04 - 1998.10 </CareerTitle>
                    <CareerTitle>株式会社 タカオ</CareerTitle>
                    <p>公園遊具メーカー。デザイナーとして従事。</p>
                </Dd3>
            </dl>
            </Content>
            <Content>
            <Title>EDUCATION</Title>
            <dl>
                <Dd>
                    <CareerTitle>環境デザイン | 2008.08 - 2018.12 </CareerTitle>
                    <CareerTitle>宝塚造形芸術大学・大学院</CareerTitle>
                </Dd>
                <Dd3>
                    <CareerTitle>インテリアデザイン | 2008.08 - 2018.12</CareerTitle>
                    <CareerTitle>宝塚造形芸術大学・デザインコース</CareerTitle>
                </Dd3>
            </dl>
            </Content>
        </Section>
        </>
    );
};

const Section = styled.section`
    background-color: #F7F7F7;
    display:flex;

`;

const Content = styled.div`
    width:50%;
    margin: 0 auto;
`;

const CareerTitle = styled.div`
    font-size:16px;
    font-weight: 700;
    line-height:21px;
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

const Dd = styled.dd`
position:relative;
margin-left: 60px;
margin-bottom: 60px;
width: 80%;
    &::before {
        content:"";
        display:inline-block;
        width:3px;
        height:85px;
        background-color:#C4C4C4;
        position:absolute;
        top: 13px;
        left:-25px;
    };
    &::after {
    content: '●';
    position: absolute;
    left: -28px;
    top: 0;
    font-size: 10px;
    color: #C4C4C4;
;
}
`;

const Dd2 = styled.dd`
position:relative;
margin-left: 60px;
margin-bottom: 60px;
width: 80%;
    &::before {
        content:"";
        display:inline-block;
        width:3px;
        height:135px;
        background-color:#C4C4C4;
        position:absolute;
        top: 13px;
        left:-25px;
    };
    &::after {
    content: '●';
    position: absolute;
    left: -28px;
    top: 0;
    font-size: 10px;
    color: #C4C4C4;
    }
`;

const Dd3 = styled.dd`
position:relative;
margin-left: 60px;
margin-bottom: 60px;
width: 80%;
    &::after {
    content: '●';
    position: absolute;
    left: -28px;
    top: 0;
    font-size: 10px;
    color: #C4C4C4;
    }
`;

const Dd4 = styled.dd`
position:relative;
margin-left: 60px;
margin-bottom: 60px;
width: 80%;
    &::before {
        content:"";
        display:inline-block;
        width:3px;
        height:120px;
        background-color:#C4C4C4;
        position:absolute;
        top: 13px;
        left:-25px;
    };
    &::after {
    content: '●';
    position: absolute;
    left: -28px;
    top: 0;
    font-size: 10px;
    color: #C4C4C4;
    }
`;




