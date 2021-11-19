import logo from './logo.svg';
// Headerコンポーネントをimportする
import { Header } from "./components/Header";
import { MainVisual } from "./components/MainVisual";
import { Work } from "./components/Work";
import { Career } from "./components/Career";
import { Skill } from "./components/Skill";
import { Activity } from "./components/Activity";
import { IconFooter } from "./components/IconFooter";
import styled from 'styled-components';
import "./Normalize.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
      <Career />
      <Skill />
      <Activity />
      <IconFooter />
    </div>
  );
}

export default App;

