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
    const result = brutNumber - ((brutNumber * 23) / 100);
    setNet(result);
  };

  const calculSalaireNetBrut = (netNumber) => {
    const result = (1 + (23 / 100)) * netNumber;
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
      <Form.Field>
        <label htmlFor="brut">
          Salaire Mensuel Brut
          <input placeholder="Salaire Mensuel Brut" value={brut} name="brut" onChange={handleChangeValueBrut} />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="net">
          Salaire Mensuel Net
          <input placeholder="Salaire Mensuel Net" value={net} onChange={handleChangeValueNet} />
        </label>

      </Form.Field>
    </Form>
  );
}

export default FormConvert;
