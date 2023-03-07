import { useState, useEffect } from 'react';
import '../App/styles.css';
import { Form } from 'semantic-ui-react';

function FormImpot({ net, slider, setNet }) {
  const [netImpot, setNetImpot] = useState(0);
  const [annuelNetImpot, setAnnuelNetImpot] = useState(0);

  const calculNetApresImpots = (salaireNet, percentImpot) => {
    const result = (salaireNet - ((salaireNet * percentImpot) / 100)).toFixed(2);
    setNetImpot(result);
  };

  const handleChangeMensuelImpot = (event) => {
    setNetImpot(event.target.value);
  };

  useEffect(() => {
    calculNetApresImpots(net, slider);
  }, [net, slider]);
  return (
    <Form className="formConvert">
      <Form.Group widths="equal">
        <Form.Field>
          <label htmlFor="brut">
            Mensuel Net après Impots
            <input disabled type="number" placeholder="Salaire Mensuel Brut" value={netImpot} name="brut" onChange={handleChangeMensuelImpot} />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="brut">
            Annuel Net après Impots
            <input type="number" placeholder="Salaire Mensuel Brut" value={annuelNetImpot} name="brut" />
          </label>
        </Form.Field>
      </Form.Group>
    </Form>
  );
}

export default FormImpot;
