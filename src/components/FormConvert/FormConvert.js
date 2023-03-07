/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';

import './FormConvert.scss';

import FormMensuel from '../FormMensuel/FormMensuel';
import FormHoraire from '../FormHoraire/FormHoraire';
import FormAnnuel from '../FormAnnuel/FormAnnuel';

import { calculSalaireHoraireBrutNet, calculSalaireHoraireNetBrut } from '../../Func/FuncHoraire';
import { calculSalaireBrutNet, calculSalaireNetBrut } from '../../Func/FuncMensuel';
import { calculSalaireAnnuelBrutNet, calculSalaireAnnuelNetBrut } from '../../Func/FuncAnnuel';

function FormConvert({ percent, net, setNet }) {
  const [brut, setBrut] = useState(0);
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

  const handleChangeValueBrut = (event) => {
    setIsBrut(true);
    setIsNet(false);
    setIsHoraireBrut(false);
    setIsHoraireNet(false);
    setIsAnnuelNet(false);
    setIsAnnuelBrut(false);
    setBrut(event.target.value);
  };

  const handleChangeValueNet = (event) => {
    setIsHoraireBrut(false);
    setIsHoraireNet(false);
    setIsBrut(false);
    setIsNet(true);
    setIsAnnuelNet(false);
    setIsAnnuelBrut(false);
    setNet(event.target.value);
  };

  const handleChangeValueHoraireBrut = (event) => {
    setIsBrut(false);
    setIsNet(false);
    setIsHoraireBrut(true);
    setIsHoraireNet(false);
    setIsAnnuelNet(false);
    setIsAnnuelBrut(false);
    setBrutHoraire(event.target.value);
  };

  const handleChangeValueHoraireNet = (event) => {
    setIsBrut(false);
    setIsNet(false);
    setIsHoraireBrut(false);
    setIsHoraireNet(true);
    setIsAnnuelNet(false);
    setIsAnnuelBrut(false);
    setNetHoraire(event.target.value);
  };

  const handleChangeValueAnnuelleBrut = (event) => {
    setIsBrut(false);
    setIsNet(false);
    setIsHoraireBrut(false);
    setIsHoraireNet(false);
    setIsAnnuelNet(false);
    setIsAnnuelBrut(true);
    setBrutAnnuel(event.target.value);
  };

  const handleChangeValueAnnuelleNet = (event) => {
    setIsBrut(false);
    setIsNet(false);
    setIsHoraireBrut(false);
    setIsHoraireNet(false);
    setIsAnnuelNet(true);
    setIsAnnuelBrut(false);
    setNetAnnuel(event.target.value);
  };

  useEffect(() => {
    if (isNet) {
      calculSalaireNetBrut(net, setBrut, setBrutHoraire, setNetHoraire, setNetAnnuel, setBrutAnnuel, percent);
    }
    else if (isBrut) {
      calculSalaireBrutNet(brut, setNet, setBrutHoraire, setNetHoraire, setNetAnnuel, setBrutAnnuel, percent);
    }
    else if (isHoraireBrut) {
      calculSalaireHoraireBrutNet(brutHoraire, setNet, setBrut, setNetHoraire, setNetAnnuel, setBrutAnnuel, percent);
    }
    else if (isHoraireNet) {
      calculSalaireHoraireNetBrut(netHoraire, setNet, setBrut, setBrutHoraire, setNetAnnuel, setBrutAnnuel, percent);
    }
    else if (isAnnuelBrut) {
      calculSalaireAnnuelBrutNet(
        brutAnnuel,
        setBrut,
        setBrutHoraire,
        setNetAnnuel,
        setNet,
        setNetHoraire,
        percent,
      );
    }
    else if (isAnnuelNet) {
      calculSalaireAnnuelNetBrut(
        netAnnuel,
        setBrut,
        setBrutHoraire,
        setBrutAnnuel,
        setNet,
        setNetHoraire,
        percent,
      );
    }
  }, [net, brut, netHoraire, brutHoraire, brutAnnuel, netAnnuel, percent]);

  return (
    <Form className="formConvert">
      <FormMensuel
        brut={brut}
        net={net}
        changeBrut={handleChangeValueBrut}
        changeNet={handleChangeValueNet}
        percent={percent}

      />
      <FormHoraire
        netHoraire={netHoraire}
        brutHoraire={brutHoraire}
        changeHoraireBrut={handleChangeValueHoraireBrut}
        changeHoraireNet={handleChangeValueHoraireNet}
        percent={percent}
      />
      <FormAnnuel
        brutAnnuel={brutAnnuel}
        netAnnuel={netAnnuel}
        changeAnnuelBrut={handleChangeValueAnnuelleBrut}
        changeAnnuelNet={handleChangeValueAnnuelleNet}
        percent={percent}
      />
    </Form>
  );
}

export default FormConvert;
