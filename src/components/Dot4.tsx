import styled from 'styled-components';

export const Dot4 = () => {
  return (
    <>
      <SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDot></SkillDot><SkillDotNot></SkillDotNot>
    </>
  );
};

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
