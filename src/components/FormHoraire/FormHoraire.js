import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';

function FormHoraire({
  brutHoraire, netHoraire,
  changeHoraireBrut, changeHoraireNet,
}) {
  return (
    <Form.Group widths="equal">
      <Form.Field>
        <label htmlFor="horairebrut">
          Salaire Horaire Brut
          <input type="number" placeholder="Salaire Horaire Brut" value={brutHoraire} name="horairebrut" onChange={changeHoraireBrut} />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="horairenet">
          Salaire Horaire Net
          <input type="number" placeholder="Salaire Horaire Net" value={netHoraire} name="horairenet" onChange={changeHoraireNet} />
        </label>

      </Form.Field>
    </Form.Group>
  );
}

export default FormHoraire;
