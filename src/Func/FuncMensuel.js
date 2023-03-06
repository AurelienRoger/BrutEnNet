import FuncCalcul from './FuncCalcul';

export const calculSalaireBrutNet = (brutNumber, setNet, setBrutHoraire, setNetHoraire, setNetAnnuel, setBrutAnnuel) => {
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

export const calculSalaireNetBrut = (netNumber, setBrut, setBrutHoraire, setNetHoraire) => {
  const result = Math.round((1 + 0.2989) * netNumber);
  const resultBrutHoraire = (result / ((35 * 52) / 12)).toFixed(2);
  const resultNetHoraire = (netNumber / ((35 * 52) / 12)).toFixed(2);
  setBrut(result);
  setBrutHoraire(resultBrutHoraire);
  setNetHoraire(resultNetHoraire);
};
