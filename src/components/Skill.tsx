import styled from 'styled-components';
import img from '../img/Vector.png';
import {BarGraph} from './BarGraph';
import {PieChart} from './PieChart';
import {Dot3} from './Dot3';
import {Dot4} from './Dot4';
import {Dot2} from './Dot2';

interface MyObj {
  id: number;
  title: string;
  dot: number;
  des: string;
}

const tasks: MyObj[] = [
  { id: 1, title: "JavaScript", dot: 4, des: "ES6, TypeScript"},
  { id: 2, title: "HTML / CSS", dot: 4, des: ""},
  { id: 3, title: "Node.js", dot: 2, des: "Node.js"},
  { id: 4, title: "PHP", dot: 3, des: "かつてよく書いた"},
  { id: 5, title: "Java", dot: 2, des: "既存システムの保守に2年ほど従事"},
  { id: 6, title: "Ruby", dot: 1, des: "機会があればちょこっと書く程度"},
  { id: 7, title: "React + Redux", dot: 3, des: "Styled-component, Storybook"},
  { id: 8, title: "CakePHP", dot: 2, des: ""},
  { id: 9, title: "WordPress", dot: 3, des: "テーマ・プラグイン開発など"},
  { id: 9, title: "Action Script", dot: 4, des: "数多くの実績を積みました"},
];


  const Tasks = ({ tasks }: {tasks: any}, index: any) => {
  const list = tasks.map((task: any, index: any) => {
    switch(task.dot){
      case 1:
      return (
        <Tr key={index}>
          <Td>{task.title}</Td>
          <Td2><SkillDotNot></SkillDotNot><SkillDotNot></SkillDotNot><SkillDotNot></SkillDotNot><SkillDotNot></SkillDotNot><SkillDotNot></SkillDotNot></Td2>
          <Td3>{task.des}</Td3>
        </Tr>
      );
    }
    switch(task.dot){
      case 2:
      return (
        <Tr key={index}>
          <Td>{task.title}</Td>
          <Td2><Dot2></Dot2></Td2>
          <Td3>{task.des}</Td3>
        </Tr>
      );
    }
    switch(task.dot){
      case 3:
      return (
        <Tr key={index}>
          <Td>{task.title}</Td>
          <Td2><Dot3></Dot3></Td2>
          <Td3>{task.des}</Td3>
        </Tr>
      );
    }
    switch(task.dot){
      case 4:
      return (
        <Tr key={index}>
          <Td>{task.title}</Td>
          <Td2><Dot4></Dot4></Td2>
          <Td3>{task.des}</Td3>
        </Tr>
      );
    }
    switch(task.dot){
      case 5:
      return (
        <Tr key={index}>
          <Td>{task.title}</Td>
          <Td2><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot></Td2>
          <Td3>{task.des}</Td3>
        </Tr>
      );
    }

  });
  return <tbody key={index}>{list}</tbody>
  };

export const Skill = () => {
  return (
    <>
    <Section>
      <Content>
        <Title>SKILL</Title>
        <LaySkill>
          <Table>
            <Tasks tasks={tasks}></Tasks>
          </Table>
        </LaySkill>
      </Content>
      <Content>
        <Title>PERSONAL QUALITIES</Title>
        <Text>技術的好奇心が旺盛で「とにかくやってみる」が身上。</Text>
        <Flex>
          <PieChart></PieChart>
          <BarGraph></BarGraph>
        </Flex>
      </Content>

    </Section>
    </>
  );
};

const Text = styled.div`
margin-top: 20px;
margin-left: 60px;
position: relative;
&::after {
  content: '●';
  position: absolute;
  left: -28px;
  top: 0;
  font-size: 10px;
  color: #C4C4C4;
  }
`;


const LaySkill = styled.div`
  width: 100%;

`;

const Table = styled.table`
  width: 90%;
  margin-top: 2%;
  margin-left: 8%;
`;

const Tr = styled.tr`

`;

const Td = styled.td`
  font-weight: 700;
  width: 5%;
`;

const Td2 = styled.td`
  width: 5%;
`;

const Td3 = styled.td`
  width: 10%;
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

// const CareerTitle = styled.div`
//   font-size:16px;
//   font-weight: 700;
//   line-height:21px;
// `;

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
