
import styled from 'styled-components';
import img from '../img/bg.png';

export const Header = () => {
  return (
    <BackImage>
      <Prof>
        <ProfImage></ProfImage>
        <ProfDesc>
            <table>
                <ProfTr>
                  <ProfTd>aaa</ProfTd>
                  <ProfTd>ccc</ProfTd>
                </ProfTr>
                <ProfTr>bbb</ProfTr>
            <tr>
                <li></li>
            </tr>
            <tr>
                <li>名前</li>
            </tr>
                <tr>
                    <li>性別</li>
                    <li>生年月日</li>
                    <li>現住所</li>
                </tr>
                <tr>
                    <li>男性</li>
                    <li></li>
                    <li></li>
                </tr>

            </table>
        </ProfDesc>
      </Prof>
    </BackImage>
  );
  };

const BackImage = styled.div`
background-image: url(${img});
  width: 100%;
  height: 430px;
  display: flex;
  justify-content: center; /*左右中央揃え*/
  align-items: center;   /*上下中央揃え*/
`;

const Prof = styled.div`
  background-color: blue;
  width: 80%;
  height: 276px;
  display: flex;
`;

const ProfImage = styled.div`
background-color: #b0c4de;
width: 32%;
height: 276px;

`;

const ProfDesc = styled.div`
background-color: #778899;
width: 68%;
height: 276px;

`;

const ProfTr = styled.tr`
background-color: blue;
width: 28%;
`;

const ProfTd = styled.td`
background-color: red;
width: 10%;
`;

