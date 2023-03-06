import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

function Buttons({ setPercent }) {
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
    <Button.Group color="olive">
      <Button onClick={handleClickbuttonUn} active={isActiveUn}>Non-Cadre</Button>
      <Button onClick={handleClickbuttonDeux} active={isActiveDeux}>Cadre</Button>
      <Button onClick={handleClickbuttonTrois} active={isActiveTrois}>Fonctionnaire</Button>
    </Button.Group>
  );
}

export default Buttons;
