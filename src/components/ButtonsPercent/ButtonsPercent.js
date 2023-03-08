import React, { useState } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import '../Buttons/Buttons.scss';

function ButtonsPercent({ setPercent }) {
  const [isActiveUn, setIsActiveUn] = useState(true);
  const [isActiveDeux, setIsActiveDeux] = useState(false);
  const [isActiveTrois, setIsActiveTrois] = useState(false);
  const [isActiveQuatre, setIsActiveQuatre] = useState(false);

  const handleClickbuttonUn = () => {
    setPercent(23);
    setIsActiveUn(true);
    setIsActiveDeux(false);
    setIsActiveTrois(false);
    setIsActiveQuatre(false);
  };

  const handleClickbuttonDeux = () => {
    setPercent(20);
    setIsActiveUn(false);
    setIsActiveDeux(true);
    setIsActiveTrois(false);
    setIsActiveQuatre(false);
  };

  const handleClickbuttonTrois = () => {
    setPercent(15);
    setIsActiveUn(false);
    setIsActiveDeux(false);
    setIsActiveTrois(true);
    setIsActiveQuatre(false);
  };

  const handleClickbuttonQuatre = () => {
    setPercent(45);
    setIsActiveUn(false);
    setIsActiveDeux(false);
    setIsActiveTrois(false);
    setIsActiveQuatre(true);
  };
  return (
    <Button.Group compact fluid>
      <Popup
        size="mini"
        content="-23%"
        trigger={
          <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonUn} active={isActiveUn}>Non-cadre</Button>
    }
      />
      <Popup
        size="mini"
        content="-20%"
        trigger={
          <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonDeux} active={isActiveDeux}>Cadre</Button>
    }
      />
      <Popup
        size="mini"
        content="-15%"
        trigger={
          <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonTrois} active={isActiveTrois}>Publique</Button>
    }
      />
      <Popup
        size="mini"
        content="-45%"
        trigger={
          <Button className="colorButton buttonStyle" inverted onClick={handleClickbuttonQuatre} active={isActiveQuatre}>Libérale</Button>
    }
      />
    </Button.Group>
  );
}

export default ButtonsPercent;
