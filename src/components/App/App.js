// == Import
import { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import FormConvert from '../FormConvert/FormConvert';
import HeaderComp from '../HeaderComp/HeaderComp';
import Buttons from '../Buttons/Buttons';
import Slider from '../Slider/Slider';
import './styles.css';

// == Composant
function App() {
  const [percent, setPercent] = useState(23);
  const [slider, setSlider] = useState(0);
  return (
    <div className="app">
      <HeaderComp />
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <FormConvert percent={percent} />
            <Buttons setPercent={setPercent} />
          </Grid.Column>
          <Grid.Column>
            <Slider slider={slider} setSlider={setSlider} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

// == Export
export default App;
