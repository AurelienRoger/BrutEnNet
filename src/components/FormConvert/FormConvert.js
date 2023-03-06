/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import FormMensuel from '../FormMensuel/FormMensuel';
import FormHoraire from '../FormHoraire/FormHoraire';
import FormAnnuel from '../FormAnnuel/FormAnnuel';

import { calculSalaireHoraireBrutNet, calculSalaireHoraireNetBrut } from '../../Func/FuncHoraire';
import { calculSalaireBrutNet, calculSalaireNetBrut } from '../../Func/FuncMensuel';

import './FormConvert.scss';
import {
  calculSalaireAnnuelBrut, calculSalaireAnnuelBrutNet, calculSalaireAnnuelNet, calculSalaireAnnuelNetBrut,
} from '../../Func/FuncAnnuel';

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

  const tabHook = [
    brut, setBrut,
    net, setNet,
    netHoraire, setNetHoraire,
    brutHoraire, setBrutHoraire,
    netAnnuel, setNetAnnuel,
    brutAnnuel, setBrutAnnuel,
  ];

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
      calculSalaireNetBrut(net, setBrut, setBrutHoraire, setNetHoraire, setNetAnnuel, setBrutAnnuel);
    }
    else if (isBrut) {
      calculSalaireBrutNet(brut, setNet, setBrutHoraire, setNetHoraire, setNetAnnuel, setBrutAnnuel);
    }
    else if (isHoraireBrut) {
      calculSalaireHoraireBrutNet(brutHoraire, setNet, setBrut, setNetHoraire, setNetAnnuel, setBrutAnnuel);
    }
    else if (isHoraireNet) {
      calculSalaireHoraireNetBrut(netHoraire, setNet, setBrut, setBrutHoraire, setNetAnnuel, setBrutAnnuel);
    }
    else if (isAnnuelBrut) {
      calculSalaireAnnuelBrutNet(
        brutAnnuel,
        setBrut,
        setBrutHoraire,
        setNetAnnuel,
        setNet,
        setNetHoraire,
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
      );
    }
  }, [net, brut, netHoraire, brutHoraire, brutAnnuel, netAnnuel]);

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
      <FormAnnuel
        brutAnnuel={brutAnnuel}
        netAnnuel={netAnnuel}
        changeAnnuelBrut={handleChangeValueAnnuelleBrut}
        changeAnnuelNet={handleChangeValueAnnuelleNet}
      />
    </Form>
  );
}

export default FormConvert;
