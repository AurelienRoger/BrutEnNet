import FuncCalcul from './FuncCalcul';

export const calculSalaireBrutNet = (
  brutNumber,
  setNet,
  setBrutHoraire,
  setNetHoraire,
  setNetAnnuel,
  setBrutAnnuel,
  percent,
  hour,
  month,
) => {
  const percentReel = percent / 100;
  // mensuel
  const netMensuel = FuncCalcul.brutEnNet(brutNumber, percentReel);
  setNet(netMensuel);

  // annuel
  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutNumber, month);
  const netAnnuel = FuncCalcul.mensuelEnAnnuel(netMensuel, month);
  setBrutAnnuel(brutAnnuel);
  setNetAnnuel(netAnnuel);

  // journalier
  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutNumber, hour);
  const netHoraire = FuncCalcul.mensuelEnJournalier(netMensuel, hour);
  setBrutHoraire(brutHoraire);
  setNetHoraire(netHoraire);
};

export const calculSalaireNetBrut = (
  netNumber,
  setBrut,
  setBrutHoraire,
  setNetHoraire,
  setNetAnnuel,
  setBrutAnnuel,
  percent,
  hour,
  month,
) => {
  let percentReel;
  let percentNet;
  if (percent === 23) {
    percentReel = percent / 100;
    percentNet = percentReel + 0.0689;
  }
  else if (percent === 25) {
    percentNet = 0.334;
  }
  else if (percent === 15) {
    percentNet = 17.5 / 100;
  }
  else if (percent === 45) {
    percentNet = 81.9 / 100;
  }
  // mensuel
  const brutMensuel = FuncCalcul.netEnBrut(netNumber, percentNet);
  // 0,2989%
  setBrut(brutMensuel);

  // annuel
  const netAnnuel = FuncCalcul.mensuelEnAnnuel(netNumber, month);
  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutMensuel, month);
  setBrutAnnuel(brutAnnuel);
  setNetAnnuel(netAnnuel);

  // journalier
  const netHoraire = FuncCalcul.mensuelEnJournalier(netNumber, hour);
  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, hour);
  setBrutHoraire(brutHoraire);
  setNetHoraire(netHoraire);
};
