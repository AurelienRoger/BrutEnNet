import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';

function FormAnnuel() {
  return (
    <Form.Group widths="equal">
      <Form.Field>
        <label htmlFor="annuelbrut">
          Salaire Annuel Brut
          <input type="number" placeholder="Salaire Annuel Brut" name="annuelbrut" />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="annuelnet">
          Salaire Annuel Net
          <input type="number" placeholder="Salaire Annuel Net" name="annuelnet" />
        </label>

      </Form.Field>
    </Form.Group>
  );
}

export default FormAnnuel;
