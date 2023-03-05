/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import FormMensuel from '../../FormMensuel/FormMensuel';
import FormHoraire from '../FormHoraire/FormHoraire';

function FormConvert() {
  const [brut, setBrut] = useState(0);
  const [net, setNet] = useState(0);
  const [netHoraire, setNetHoraire] = useState(0);
  const [brutHoraire, setBrutHoraire] = useState(0);

  const [isBrut, setIsBrut] = useState(false);
  const [isNet, setIsNet] = useState(false);

  const calculSalaireBrutNet = (brutNumber) => {
    const result = Math.round((1 - 0.23) * brutNumber);
    const resultNetHoraire = (result / ((35 * 52) / 12)).toFixed(2);
    const resultBrutHoraire = (brutNumber / ((35 * 52) / 12)).toFixed(2);
    setNet(result);
    setBrutHoraire(resultBrutHoraire);
    setNetHoraire(resultNetHoraire);
  };

  const calculSalaireNetBrut = (netNumber) => {
    const result = Math.round((1 + 0.2989) * netNumber);
    const resultBrutHoraire = (result / ((35 * 52) / 12)).toFixed(2);
    const resultNetHoraire = (netNumber / ((35 * 52) / 12)).toFixed(2);
    setBrut(result);
    setBrutHoraire(resultBrutHoraire);
    setNetHoraire(resultNetHoraire);
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
      <FormMensuel
        brut={brut}
        net={net}
        changeBrut={handleChangeValueBrut}
        changeNet={handleChangeValueNet}
      />
      <FormHoraire netHoraire={netHoraire} brutHoraire={brutHoraire} />
    </Form>
  );
}

export default FormConvert;
