import logo from './logo.svg';
// Headerコンポーネントをimportする
import { Header } from "./components/Header";
import { MainVisual } from "./components/MainVisual";
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header className="l-header">
      <Header />
      </header>
      <MainVisual />

    </div>
  );
}

export default App;

