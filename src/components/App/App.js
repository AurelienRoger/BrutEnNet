// == Import
import { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import FormConvert from '../FormConvert/FormConvert';
import HeaderComp from '../HeaderComp/HeaderComp';
import Buttons from '../Buttons/Buttons';
import Slider from '../Slider/Slider';
import './styles.scss';
import FormImpot from '../FormImpot/FormImpot';

// == Composant
function App() {
  const [percent, setPercent] = useState(23);
  const [hour, setHour] = useState(35);
  const [slider, setSlider] = useState(0);
  const [net, setNet] = useState(0);
  const [month, setMonth] = useState(12);
  return (
    <div className="app">
      <HeaderComp />
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <FormConvert percent={percent} net={net} setNet={setNet} hour={hour} month={month} />
            <Buttons setPercent={setPercent} setHour={setHour} setMonth={setMonth} />
          </Grid.Column>
          <Grid.Column>
            <Slider slider={slider} setSlider={setSlider} />
            <FormImpot slider={slider} net={net} setNet={setNet} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

// == Export
export default App;
