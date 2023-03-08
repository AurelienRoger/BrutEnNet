import { useState, useEffect } from 'react';
import '../App/styles.scss';
import './FormImpot.scss';
import { List, Label } from 'semantic-ui-react';

function FormImpot({ net, slider, setNet }) {
  const [netImpot, setNetImpot] = useState(0);
  const [annuelNetImpot, setAnnuelNetImpot] = useState(0);

  const calculNetApresImpots = (salaireNet, percentImpot) => {
    const result = (salaireNet - Math.round((salaireNet * percentImpot) / 100));
    const resultAnnuel = Math.round(result * 12);
    setNetImpot(result);
    setAnnuelNetImpot(resultAnnuel);
  };

  useEffect(() => {
    calculNetApresImpots(net, slider);
  }, [net, slider]);
  return (
    <List divided selection>
      <List.Item>
        <Label className="colorBase" horizontal>
          {netImpot}
        </Label>
        Mensuel Net après impots
      </List.Item>
      <List.Item>
        <Label className="colorBase" horizontal>
          {annuelNetImpot}
        </Label>
        Annuel Net après impots
      </List.Item>
    </List>
  );
}

export default FormImpot;
