/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

function FormConvert() {
  return (
    <Form>
      <Form.Field>
        <input placeholder="Salaire Mensuel Brut" />
      </Form.Field>
      <Form.Field>
        <input placeholder="Salaire Mensuel Net" />
      </Form.Field>
    </Form>
  );
}

export default FormConvert;
