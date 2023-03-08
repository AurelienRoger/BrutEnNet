import React, { useState } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import '../Buttons/Buttons.scss';
import './ButtonsHour.scss';

function ButtonsHour({ setHour }) {
  const [isActiveUn, setIsActiveUn] = useState(true);
  const [isActiveDeux, setIsActiveDeux] = useState(false);
  const [isActiveTrois, setIsActiveTrois] = useState(false);
  const [isActiveQuatre, setIsActiveQuatre] = useState(false);

  const handleClickbuttonUn = () => {
    setIsActiveUn(true);
    setIsActiveDeux(false);
    setIsActiveTrois(false);
    setIsActiveQuatre(false);
    setHour(35);
  };

  const handleClickbuttonDeux = () => {
    setIsActiveUn(false);
    setIsActiveDeux(true);
    setIsActiveTrois(false);
    setIsActiveQuatre(false);
    setHour(37);
  };

  const handleClickbuttonTrois = () => {
    setIsActiveUn(false);
    setIsActiveDeux(false);
    setIsActiveTrois(true);
    setIsActiveQuatre(false);
    setHour(38);
  };

  const handleClickbuttonQuatre = () => {
    setIsActiveUn(false);
    setIsActiveDeux(false);
    setIsActiveTrois(false);
    setIsActiveQuatre(true);
    setHour(39);
  };
  return (
    <Button.Group compact fluid>
      <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonUn} active={isActiveUn}>35h</Button>

      <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonDeux} active={isActiveDeux}>37h</Button>

      <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonTrois} active={isActiveTrois}>38h</Button>
      <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonQuatre} active={isActiveQuatre}>39h</Button>

    </Button.Group>
  );
}

export default ButtonsHour;
