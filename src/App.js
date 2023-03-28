import "./App.css";
import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import Inline from "./components/Inline";
import EventHandler from "./components/EventHandler";
import Example1 from "./components/Example1";
import State from "./components/State";
import State2 from "./components/State2";
import Counter from "./components/Conter";
import Condition from "./components/Condition";
import Emoji from "./components/Emoji";
import ClassState from "./components/ClassState";
import StateAndVariable from "./components/StateAndVariable";
import StateProblem from "./components/StateProblem";
import List from "./components/List";
import Modal from "./components/Modal";
import PropsHeader from "./components/PropsHeader";
import MultiProps from "./components/MultiProps";

function App() {
  const str = "Go Naver";
  return (
    <div className="App">
      <MultiProps text={str} href="https://naver.com" userID="tetz" />
    </div>
  );
}

export default App;
