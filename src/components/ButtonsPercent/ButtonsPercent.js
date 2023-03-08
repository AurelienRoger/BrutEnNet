import React, { useState } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import '../Buttons/Buttons.scss';

function ButtonsPercent({ setPercent }) {
  const [isActiveUn, setIsActiveUn] = useState(true);
  const [isActiveDeux, setIsActiveDeux] = useState(false);
  const [isActiveTrois, setIsActiveTrois] = useState(false);

  const handleClickbuttonUn = () => {
    setPercent(23);
    setIsActiveUn(true);
    setIsActiveDeux(false);
    setIsActiveTrois(false);
  };

  const handleClickbuttonDeux = () => {
    setPercent(20);
    setIsActiveUn(false);
    setIsActiveDeux(true);
    setIsActiveTrois(false);
  };

  const handleClickbuttonTrois = () => {
    setPercent(15);
    setIsActiveUn(false);
    setIsActiveDeux(false);
    setIsActiveTrois(true);
  };
  return (
    <Button.Group compact fluid>
      <Popup
        size="mini"
        content="-23%"
        trigger={
          <Button className="colorButton" inverted onClick={handleClickbuttonUn} active={isActiveUn}>Non-Cadre</Button>
    }
      />
      <Popup
        size="mini"
        content="-20%"
        trigger={
          <Button className="colorButton" inverted onClick={handleClickbuttonDeux} active={isActiveDeux}>Cadre</Button>
    }
      />
      <Popup
        size="mini"
        content="-15%"
        trigger={
          <Button className="colorButton" inverted onClick={handleClickbuttonTrois} active={isActiveTrois}>Fonctionnaire</Button>
    }
      />
    </Button.Group>
  );
}

export default ButtonsPercent;
