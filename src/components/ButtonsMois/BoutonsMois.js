import React, { useState } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import '../Buttons/Buttons.scss';
import './BoutonsMois.scss';

function ButtonsMois({ setMonth }) {
  const [isActiveUn, setIsActiveUn] = useState(true);
  const [isActiveDeux, setIsActiveDeux] = useState(false);
  const [isActiveTrois, setIsActiveTrois] = useState(false);
  const [isActiveQuatre, setIsActiveQuatre] = useState(false);

  const handleClickbuttonUn = () => {
    setIsActiveUn(true);
    setIsActiveDeux(false);
    setIsActiveTrois(false);
    setIsActiveQuatre(false);
    setMonth(12);
  };

  const handleClickbuttonDeux = () => {
    setIsActiveUn(false);
    setIsActiveDeux(true);
    setIsActiveTrois(false);
    setIsActiveQuatre(false);
    setMonth(13);
  };

  const handleClickbuttonTrois = () => {
    setIsActiveUn(false);
    setIsActiveDeux(false);
    setIsActiveTrois(true);
    setIsActiveQuatre(false);
    setMonth(14);
  };

  const handleClickbuttonQuatre = () => {
    setIsActiveUn(false);
    setIsActiveDeux(false);
    setIsActiveTrois(false);
    setIsActiveQuatre(true);
    setMonth(15);
  };
  return (
    <Button.Group compact fluid>
      <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonUn} active={isActiveUn}>12 mois</Button>

      <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonDeux} active={isActiveDeux}>13 mois</Button>

      <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonTrois} active={isActiveTrois}>14 mois</Button>
      <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonQuatre} active={isActiveQuatre}>15 mois</Button>

    </Button.Group>
  );
}

export default ButtonsMois;
