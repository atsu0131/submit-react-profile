
import styled from 'styled-components';
import img from '../img/bg.png';
import profileImg from '../img/title.png';


let name: string = "ATSUSHI ISAI"
let comment: string = "バックエンドからフロントエンドまで、さまざまな技術を駆使して実装するのが好き。Webサービスの収益向上のためにさらに技術を磨いていきたい。バックエンドはPHPやRuby、フロントエンドはVue.jsやReactを使います。";
let career: string = "Front Engineer"
let gendar_title: string = "性別"
let gendar: string = "男性"
let birth_title: string = "生年月日"
let birth_day: string = "1990/4/4"
let address_title: string = "現住所"
let address: string = "埼玉県和光市"

const keyColor: string = 'white';


export const Header = () => {
  return (
  <>
  <BackImage id="top">
    <Prof>
    <LayProfImage>
      <LayProfImageInline>
      <ProfImage></ProfImage>
      <ProfImageName>{name}</ProfImageName>
      <ProfImageCarrer>{career}</ProfImageCarrer>
      </LayProfImageInline>
      <ProfLine></ProfLine>
    </LayProfImage>
    <ProfDesc>
      <Table>
        <tbody>
          <ProfTr>
            <ProfTdAll colSpan={2}>{comment}</ProfTdAll>
            </ProfTr>
          <ProfTr>
          <ProfTdAll2 colSpan={2}>{name}</ProfTdAll2>
          </ProfTr>
          <ProfTr2>
            <ProfTdName>{gendar_title}</ProfTdName>
            <ProfTdName2>{gendar}</ProfTdName2>
          </ProfTr2>
          <ProfTr2>
            <ProfTdName>{birth_title}</ProfTdName>
            <ProfTdName2>{birth_day}</ProfTdName2>
          </ProfTr2>
          <ProfTr2>
            <ProfTdName>
              {address_title}
            </ProfTdName>
            <ProfTdName2>
              {address}
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
  background-color: white;
  position: absolute;
  top: 170px;
  left: 32%;
  height:1px;
  width:60%;
`;

const ProfLine = styled.div`
  background-color: white;
  position: absolute;
  top: 170px;
  left: 10%;
  height:1px;
  width:32%;
  z-index: -10;
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
  z-index: -10;
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
  z-index:200;
  background-size: cover;
`;

const ProfDesc = styled.div`
  width: 68%;
  height: 276px;
`;

const ProfTr = styled.tr`
  width: 100%;
`;

const ProfTr2 = styled.tr`
  line-height: 15px;
  width: 100%;
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
  height: 250px;
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
