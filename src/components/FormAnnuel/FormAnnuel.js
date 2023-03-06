import React, { useEffect, useState } from 'react';
import { Form, Label } from 'semantic-ui-react';

function FormAnnuel({
  brutAnnuel, netAnnuel, changeAnnuelBrut, changeAnnuelNet, percent,
}) {
  return (
    <Form.Group widths="equal">
      <Form.Field>
        <label htmlFor="annuelbrut">
          Salaire Annuel Brut
          <input type="number" placeholder="Salaire Annuel Brut" name="annuelbrut" value={brutAnnuel} onChange={changeAnnuelBrut} />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="annuelnet">
          Salaire Annuel Net
          <span className="labelPercent">
            <Label color="red" size="mini">
              -{percent}%
            </Label>
          </span>
          <input type="number" placeholder="Salaire Annuel Net" name="annuelnet" value={netAnnuel} onChange={changeAnnuelNet} />
        </label>

      </Form.Field>
    </Form.Group>
  );
}

export default FormAnnuel;
