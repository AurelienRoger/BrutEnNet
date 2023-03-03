/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';

function FormConvert() {
  const [brut, setBrut] = useState(0);
  const [net, setNet] = useState(0);

  const calculSalaireBrutNet = (brutNumber) => {
    const result = brutNumber - ((brutNumber * 23) / 100);
    setNet(result);
  };

  useEffect(() => {
    calculSalaireBrutNet(brut);
  }, [brut]);

  const handleChangeValueBrut = (event) => {
    setBrut(event.target.value);
    const result = brut - ((brut * 23) / 100);
    setNet(result);
    // calculSalaireBrutNet(brut);
  };

  const handleChangeValueNet = (event) => {
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
