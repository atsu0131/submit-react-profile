
import styled from 'styled-components';
import img from '../img/bg.png';
import profileImg from '../img/title.png';
import "../Normalize.css"

let aa: any = "aa";
console.log(aa);

const keyColor = 'white';


export const Header = () => {
  return (
    <>
    <BackImage>
      <Prof>
        <LayProfImage>
          <LayProfImageInline>
          <ProfImage></ProfImage>
          <ProfImageName>ATSUSHI ISAI</ProfImageName>
          <ProfImageCarrer>Front Eengineer</ProfImageCarrer>
          </LayProfImageInline>
        </LayProfImage>
        <ProfDesc>
            <Table>
            <tbody>
                <ProfTr>
                <ProfTdAll colSpan={2}>デザイン、コーディング、UI/UXなど、WEB周辺の業務に20年。コーディング大好き。
現在、サービスベンダー・ベンチャーにて、自立分散協調型のデザインチームと、デザイン文化醸成にチャレンジ中。</ProfTdAll>
                </ProfTr>
                <ProfTr>
                  <ProfTdAll2 colSpan={2}>isai ATSUSHI</ProfTdAll2>
                </ProfTr>
                <ProfTr2>
                  <ProfTdName>性別</ProfTdName>
                  <ProfTdName2>男性</ProfTdName2>
                </ProfTr2>
                <ProfTr2>
                  <ProfTdName>生年月日</ProfTdName>
                  <ProfTdName2>1990/4/4</ProfTdName2>
                </ProfTr2>
                <ProfTr2>
                  <ProfTdName>
                    現住所
                  </ProfTdName>
                  <ProfTdName2>
                    埼玉県和光市
                  </ProfTdName2>
                </ProfTr2>
            </tbody>
            </Table>
        </ProfDesc>
      </Prof>
      <Line></Line>
    </BackImage>
    
    </>
  );
};

const Line = styled.div`
  background-color:white;
  position: absolute;
  top: 170px;
  left: 32%;
  height:1px;
  width:60%;
`;

const BackImage = styled.div`
background-image: url(${img});
  width: 100%;
  height: 430px;
  display: flex;
  justify-content: center; /*左右中央揃え*/
  align-items: center;
  position: relative;
  font-family: "Roboto";
`;

const Prof = styled.div`
  width: 80%;
  height: 276px;
  display: flex;
`;

const LayProfImage = styled.div`
  margin-right: 73px;
  width: 32%;
  height: 276px;
  border : solid 1px white;
  display: flex;
  justify-content: center; /*左右中央揃え*/
`;

const LayProfImageInline = styled.div`
  margin-top: 31px;
`;

const ProfImageName = styled.div`
  margin-top: 31px;
  color: ${keyColor};
  text-align:center;
`;

const ProfImageCarrer = styled.div`
  margin-top: 12px;
  color: ${keyColor};
  text-align:center;
`;

const ProfImage = styled.div`
background-image: url(${profileImg});
width: 128px;
height: 128px;
border-radius: 50%;
`;

const ProfDesc = styled.div`
width: 68%;
height: 276px;

`;

const ProfTr = styled.tr`
width: 100%;
`;

const ProfTr2 = styled.tr`
line-height: 5px;
width: 100%;
`;

const ProfTd = styled.td`

width: 50%;
height: 50px;
color: ${keyColor};
`;
const ProfTd2 = styled.td`

width: 50%;
height: 50px;
color: ${keyColor};
`;

const ProfTdName = styled.td`

width: 20%;
color: ${keyColor};
`;

const ProfTdName2 = styled.td`

color: ${keyColor};
`;

const Table = styled.table`
width: 100%;
height: 276px;
`;

const ProfTdAll = styled.td`
vertical-align: top;
width: 100%;
color: ${keyColor};
`;

const ProfTdAll2 = styled.td`
width: 100%;
color: ${keyColor};
`;