// == Import
import { useState } from 'react';
import FormConvert from '../FormConvert/FormConvert';
import HeaderComp from '../HeaderComp/HeaderComp';
import Buttons from '../Buttons/Buttons';
import Slider from '../Slider/Slider';
import './styles.css';

// == Composant
function App() {
  const [percent, setPercent] = useState(23);
  return (
    <div className="app">
      <HeaderComp />
      <FormConvert percent={percent} />
      <Buttons setPercent={setPercent} />
      <Slider />
    </div>
  );
}

// == Export
export default App;
