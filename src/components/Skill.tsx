import styled from 'styled-components';
import img from '../img/Vector.png';
import {BarGraph} from './BarGraph';
import {PieChart} from './PieChart';

interface MyObj {
    id: number;
    title: string;
}

const tasks: MyObj[] = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },
    { id: 4, title: "four" },
    { id: 5, title: "five" }
];

  const Tasks = ({ tasks }: {tasks: any}) => {
    const list = tasks.map((task: any) => {
      return (
        <li>
          id is {task.id}, title is "{task.title}"
        </li>
      );
    });
    return <ul>{list}</ul>;
  };

export const Skill = () => {
    return (
        <>
        <Section>
            <Content>
            <Title>SKILL</Title>
            <LaySkill>
            <Table>
                <tbody>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                <Tr>
                    <Td>Javascript</Td>
                    <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot></Td2>
                    <Td2>ES6, TypeScript </Td2>
                </Tr>
                </tbody>
            </Table>
            </LaySkill>
            </Content>
            <Content>
            <Title>PERSONAL QUALITIES</Title>
            <div>技術的好奇心が旺盛で「とにかくやってみる」が身上。</div>
            <Flex>
            <PieChart></PieChart>
            <BarGraph></BarGraph>
            </Flex>
            


            </Content>

        </Section>
        </>
    );
};

const LaySkill = styled.div`
    width: 100%;

`;

const Table = styled.table`
    width: 70%;
    margin-left: 8%;
`;

const Tr = styled.tr`

`;

const Td = styled.td`
font-weight: 700;
`;

const Td2 = styled.td`

`;


const SkillDot = styled.div`
display: inline-block;
width: 8px;
height: 8px;
border-radius: 50%;
margin-right: 6px;
background-color: #00A1AB;
`;

const SkillDotNot = styled.div`
display: inline-block;
width: 8px;
height: 8px;
border-radius: 50%;
margin-right: 6px;
background-color: #C4C4C4;
`;




const Flex = styled.div`
    display:flex;
    margin-top: 20px;
    margin-left: 50px;
`;

const Section = styled.section`
    background-color: #F7F7F7;
    display:flex;
    font-size: 14px;
`;

const Content = styled.div`
    width:50%;
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
