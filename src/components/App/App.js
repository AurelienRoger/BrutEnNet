// == Import
import FormConvert from '../FormConvert/FormConvert';
import HeaderComp from '../HeaderComp/HeaderComp';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <HeaderComp />
      <FormConvert />
    </div>
  );
}

// == Export
export default App;
