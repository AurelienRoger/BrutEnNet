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
  month
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
  const percentReel = percent / 100;
  const percentNet = percentReel + 0.0689;
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
