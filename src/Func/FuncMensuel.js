import FuncCalcul from './FuncCalcul';

export const calculSalaireBrutNet = (
  brutNumber,
  setNet,
  setBrutHoraire,
  setNetHoraire,
  setNetAnnuel,
  setBrutAnnuel,
) => {
  // mensuel
  const netMensuel = FuncCalcul.brutEnNet(brutNumber, 0.23);
  setNet(netMensuel);

  // annuel
  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutNumber, 12);
  const netAnnuel = FuncCalcul.mensuelEnAnnuel(netMensuel, 12);
  setBrutAnnuel(brutAnnuel);
  setNetAnnuel(netAnnuel);

  // journalier
  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutNumber, 35);
  const netHoraire = FuncCalcul.mensuelEnJournalier(netMensuel, 35);
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
) => {
  // mensuel
  const brutMensuel = FuncCalcul.netEnBrut(netNumber, 0.2989);
  setBrut(brutMensuel);

  // annuel
  const netAnnuel = FuncCalcul.mensuelEnAnnuel(netNumber, 12);
  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutMensuel, 12);
  setBrutAnnuel(brutAnnuel);
  setNetAnnuel(netAnnuel);

  // journalier
  const netHoraire = FuncCalcul.mensuelEnJournalier(netNumber, 35);
  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, 35);
  setBrutHoraire(brutHoraire);
  setNetHoraire(netHoraire);
};
