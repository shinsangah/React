import './App.css';
//컴포넌트는 파스칼케이스로 만들어야 읽어들임
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';


function App() {
  return (
    <div className="App">
      <ClassComponent/>
      <FunctionalComponent/>
      <MainHeader />
      <ImgComponent />
      <BtnToNaver />
    </div>
  );
}

export default App;