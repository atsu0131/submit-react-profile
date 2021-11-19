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
                    <CareerTitle>フロントエンジニア | 2019.01- </CareerTitle>
                    <CareerTitle>ベースコネクト株式会社</CareerTitle>
                    <p>SaaS ワークフローシステムのサービス開発ベンチャー。 サービス立ち上げに参画。 UI/UXの改善に取り組んだ。</p>
                </Dd2>
                <Dd2>
                    <CareerTitle>フロントエンジニア | 2019.01- </CareerTitle>
                    <CareerTitle>ベースコネクト株式会社</CareerTitle>
                    <p>SaaS ワークフローシステムのサービス開発ベンチャー。 サービス立ち上げに参画。 UI/UXの改善に取り組んだ。</p>
                </Dd2>
                <Dd2>
                    <CareerTitle>フロントエンジニア | 2019.01- </CareerTitle>
                    <CareerTitle>ベースコネクト株式会社</CareerTitle>
                    <p>SaaS ワークフローシステムのサービス開発ベンチャー。 サービス立ち上げに参画。 UI/UXの改善に取り組んだ。</p>
                </Dd2>
            </dl>
            </Content>
            <Content>
            <Title>EDUCATION</Title>
            <dl>
                <Dd>
                    <CareerTitle>フロントエンジニア | 2019.01- </CareerTitle>
                    <CareerTitle>ベースコネクト株式会社</CareerTitle>
                </Dd>
                <Dd2>
                    <CareerTitle>フロントエンジニア | 2019.01- </CareerTitle>
                    <CareerTitle>ベースコネクト株式会社</CareerTitle>
                    <p>SaaS ワークフローシステムのサービス開発ベンチャー。 サービス立ち上げに参画。 UI/UXの改善に取り組んだ。</p>
                </Dd2>
                <Dd2>
                    <CareerTitle>フロントエンジニア | 2019.01- </CareerTitle>
                    <CareerTitle>ベースコネクト株式会社</CareerTitle>
                    <p>SaaS ワークフローシステムのサービス開発ベンチャー。 サービス立ち上げに参画。 UI/UXの改善に取り組んだ。</p>
                </Dd2>
                <Dd2>
                    <CareerTitle>フロントエンジニア | 2019.01- </CareerTitle>
                    <CareerTitle>ベースコネクト株式会社</CareerTitle>
                    <p>SaaS ワークフローシステムのサービス開発ベンチャー。 サービス立ち上げに参画。 UI/UXの改善に取り組んだ。</p>
                </Dd2>
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
width: 40%;
    &::before {
        content:"";
        display:inline-block;
        width:3px;
        height:80px;
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
width: 40%;
    &::before {
        content:"";
        display:inline-block;
        width:3px;
        height:155px;
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



