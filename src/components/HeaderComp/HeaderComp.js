/* eslint-disable no-unused-vars */
import React from 'react';
import { Header } from 'semantic-ui-react';
import './HeaderComp.scss';

function HeaderComp() {
  return (
    <Header as="h1" dividing className="colortitle">
      Calcul Salaire Brut en Net ou inversement
    </Header>
  );
}

export default HeaderComp;
