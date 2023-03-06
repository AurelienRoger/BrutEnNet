import '../App/styles.css';

import React, { useEffect, useState } from 'react';
import { Form, Label, Icon } from 'semantic-ui-react';

function FormMensuel({
  brut, net, changeBrut, changeNet,
}) {
  return (
    <Form.Group widths="equal">
      <Form.Field>
        <label htmlFor="brut">
          Salaire Mensuel Brut
          <input type="number" placeholder="Salaire Mensuel Brut" value={brut} name="brut" onChange={changeBrut} />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="net">
          Salaire Mensuel Net
          <span className="labelPercent">
            <Label color="red" size="mini">
              -23%
            </Label>
          </span>

          <input type="number" placeholder="Salaire Mensuel Net" value={net} onChange={changeNet} />
        </label>
      </Form.Field>
    </Form.Group>
  );
}

export default FormMensuel;
