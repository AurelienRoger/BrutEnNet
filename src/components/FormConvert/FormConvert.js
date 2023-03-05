/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';

function FormConvert() {
  const [brut, setBrut] = useState(0);
  const [net, setNet] = useState(0);
  const [isBrut, setIsBrut] = useState(false);
  const [isNet, setIsNet] = useState(false);

  const calculSalaireBrutNet = (brutNumber) => {
    const result = Math.round((1 - 0.23) * brutNumber);
    setNet(result);
  };

  const calculSalaireNetBrut = (netNumber) => {
    const result = Math.round((1 + 0.2989) * netNumber);
    setBrut(result);
  };

  useEffect(() => {
    if (isBrut) {
      calculSalaireBrutNet(brut);
    }
  }, [brut]);

  useEffect(() => {
    if (isNet) {
      calculSalaireNetBrut(net);
    }
  }, [net]);

  const handleChangeValueBrut = (event) => {
    setIsBrut(true);
    setIsNet(false);
    setBrut(event.target.value);
    // calculSalaireBrutNet(brut);
  };

  const handleChangeValueNet = (event) => {
    setIsBrut(false);
    setIsNet(true);
    setNet(event.target.value);
  };

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field>
          <label htmlFor="brut">
            Salaire Mensuel Brut
            <input type="number" placeholder="Salaire Mensuel Brut" value={brut} name="brut" onChange={handleChangeValueBrut} />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="net">
            Salaire Mensuel Net
            <input type="number" placeholder="Salaire Mensuel Net" value={net} onChange={handleChangeValueNet} />
          </label>

        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <label htmlFor="horairebrut">
            Salaire Horaire Brut
            <input type="number" placeholder="Salaire Horaire Brut" value={brut} name="horairebrut" onChange={handleChangeValueBrut} />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="horairenet">
            Salaire Horaire Net
            <input type="number" placeholder="Salaire Horaire Net" value={net} name="horairenet" onChange={handleChangeValueNet} />
          </label>

        </Form.Field>
      </Form.Group>
    </Form>
  );
}

export default FormConvert;
