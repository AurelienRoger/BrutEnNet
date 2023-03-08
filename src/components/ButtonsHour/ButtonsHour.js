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
  };

  const handleClickbuttonDeux = () => {
    setIsActiveUn(false);
    setIsActiveDeux(true);
    setIsActiveTrois(false);
    setIsActiveQuatre(false);
  };

  const handleClickbuttonTrois = () => {
    setIsActiveUn(false);
    setIsActiveDeux(false);
    setIsActiveTrois(true);
    setIsActiveQuatre(false);
  };

  const handleClickbuttonQuatre = () => {
    setIsActiveUn(false);
    setIsActiveDeux(false);
    setIsActiveTrois(false);
    setIsActiveQuatre(true);
  };
  return (
    <Button.Group compact>
      <Button className="colorButton buttonHour" inverted onClick={handleClickbuttonUn} active={isActiveUn}>35h</Button>

      <Button className="colorButton buttonHour" inverted onClick={handleClickbuttonDeux} active={isActiveDeux}>37h</Button>

      <Button className="colorButton buttonHour" inverted onClick={handleClickbuttonTrois} active={isActiveTrois}>38h</Button>
      <Button className="colorButton buttonHour" inverted onClick={handleClickbuttonQuatre} active={isActiveQuatre}>39h</Button>

    </Button.Group>
  );
}

export default ButtonsHour;
