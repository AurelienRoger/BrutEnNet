import ButtonsPercent from '../ButtonsPercent/ButtonsPercent';
import ButtonsHour from '../ButtonsHour/ButtonsHour';
import './Buttons.scss';
import ButtonsMois from '../ButtonsMois/BoutonsMois';

function Buttons({ setPercent, setHour, setMonth }) {
  return (
    <div>
      <ButtonsPercent setPercent={setPercent} />
      <ButtonsHour setHour={setHour} />
      <ButtonsMois setMonth={setMonth} />
    </div>
  );
}

export default Buttons;
