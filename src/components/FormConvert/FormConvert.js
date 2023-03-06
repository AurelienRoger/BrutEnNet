/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import FormMensuel from '../FormMensuel/FormMensuel';
import FormHoraire from '../FormHoraire/FormHoraire';
import FormAnnuel from '../FormAnnuel/FormAnnuel';

import './FormConvert.scss';

function FormConvert() {
  const [brut, setBrut] = useState(0);
  const [net, setNet] = useState(0);
  const [netHoraire, setNetHoraire] = useState(0);
  const [brutHoraire, setBrutHoraire] = useState(0);
  const [netAnnuel, setNetAnnuel] = useState(0);
  const [brutAnnuel, setBrutAnnuel] = useState(0);

  const [isBrut, setIsBrut] = useState(false);
  const [isNet, setIsNet] = useState(false);
  const [isHoraireNet, setIsHoraireNet] = useState(false);
  const [isHoraireBrut, setIsHoraireBrut] = useState(false);
  const [isAnnuelBrut, setIsAnnuelBrut] = useState(false);
  const [isAnnuelNet, setIsAnnuelNet] = useState(false);

  const calculSalaireHoraireBrutNet = (brutHoraireNumber) => {
    // 15 € * ((35 Heures * 52 Semaines) / 12 Mois)
    const mensuelBrut = Math.round(brutHoraireNumber * ((35 * 52) / 12));
    const mensuelNet = Math.round((1 - 0.23) * mensuelBrut);
    const horaireNet = ((1 - 0.23) * brutHoraireNumber).toFixed(2);
    setNet(mensuelNet);
    setBrut(mensuelBrut);
    setNetHoraire(horaireNet);
  };

  const calculSalaireHoraireNetBrut = (netHoraireNumber) => {
    // 15 € * ((35 Heures * 52 Semaines) / 12 Mois)
    const mensuelNet = Math.round(netHoraireNumber * ((35 * 52) / 12));
    const mensuelBrut = Math.round((1 + 0.2989) * mensuelNet);
    const horaireBrut = (mensuelBrut / ((35 * 52) / 12)).toFixed(2);
    setNet(mensuelNet);
    setBrut(mensuelBrut);
    setBrutHoraire(horaireBrut);
  };

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

  const handleChangeValueBrut = (event) => {
    setIsBrut(true);
    setIsNet(false);
    setIsHoraireBrut(false);
    setIsHoraireNet(false);
    setBrut(event.target.value);
  };

  const handleChangeValueNet = (event) => {
    setIsHoraireBrut(false);
    setIsHoraireNet(false);
    setIsBrut(false);
    setIsNet(true);
    setNet(event.target.value);
  };

  const handleChangeValueHoraireBrut = (event) => {
    setIsBrut(false);
    setIsNet(false);
    setIsHoraireBrut(true);
    setIsHoraireNet(false);
    setBrutHoraire(event.target.value);
  };

  const handleChangeValueHoraireNet = (event) => {
    setIsBrut(false);
    setIsNet(false);
    setIsHoraireBrut(false);
    setIsHoraireNet(true);
    setNetHoraire(event.target.value);
  };

  useEffect(() => {
    if (isNet) {
      calculSalaireNetBrut(net);
    }
    else if (isBrut) {
      calculSalaireBrutNet(brut);
    }
    else if (isHoraireBrut) {
      calculSalaireHoraireBrutNet(brutHoraire);
    }
    else if (isHoraireNet) {
      calculSalaireHoraireNetBrut(netHoraire);
    }
  }, [net, brut, netHoraire, brutHoraire]);

  return (
    <Form className="formConvert">
      <FormMensuel
        brut={brut}
        net={net}
        changeBrut={handleChangeValueBrut}
        changeNet={handleChangeValueNet}
      />
      <FormHoraire
        netHoraire={netHoraire}
        brutHoraire={brutHoraire}
        changeHoraireBrut={handleChangeValueHoraireBrut}
        changeHoraireNet={handleChangeValueHoraireNet}
      />
      <FormAnnuel />
    </Form>
  );
}

export default FormConvert;
