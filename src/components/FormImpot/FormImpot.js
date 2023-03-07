import { useState } from 'react';
import '../App/styles.css';
import { Form } from 'semantic-ui-react';

function FormImpot() {
  const [netImpot, setNetImpot] = useState(0);
  const [annuelNetImpot, setAnnuelNetImpot] = useState(0);
  return (
    <Form className="formConvert">
      <Form.Group widths="equal">
        <Form.Field>
          <label htmlFor="brut">
            Salaire Mensuel Brut
            <input type="number" placeholder="Salaire Mensuel Brut" value={netImpot} name="brut" />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="brut">
            Salaire Mensuel Brut
            <input type="number" placeholder="Salaire Mensuel Brut" value={annuelNetImpot} name="brut" />
          </label>
        </Form.Field>
      </Form.Group>
    </Form>
  );
}

export default FormImpot;
