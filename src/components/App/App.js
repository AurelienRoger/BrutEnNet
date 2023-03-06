// == Import
import { useState } from 'react';
import FormConvert from '../FormConvert/FormConvert';
import HeaderComp from '../HeaderComp/HeaderComp';
import Buttons from '../Buttons/Buttons';
import './styles.css';

// == Composant
function App() {
  const [percent, setPercent] = useState(23);
  return (
    <div className="app">
      <HeaderComp />
      <FormConvert percent={percent} />
      <Buttons setPercent={setPercent} />
    </div>
  );
}

// == Export
export default App;
