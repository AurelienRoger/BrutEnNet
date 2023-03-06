import FuncCalcul from './FuncCalcul';

export const calculSalaireAnnuelBrutNet = (
  annuelInputBrut,
  setBrut,
  setBrutHoraire,
  setNetAnnuel,
  setNet,
  setNetHoraire,
) => {
  const brutMensuel = FuncCalcul.annuelEnMensuel(annuelInputBrut, 12);
  setBrut(brutMensuel);
  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, 35);
  setBrutHoraire(brutHoraire);

  const netAnnuel = FuncCalcul.brutEnNet(annuelInputBrut, 0.23);
  setNetAnnuel(netAnnuel);
  const netMensuel = FuncCalcul.annuelEnMensuel(netAnnuel, 12);
  setNet(netMensuel);
  const netHoraire = FuncCalcul.mensuelEnJournalier(netMensuel, 35);
  setNetHoraire(netHoraire);
};

export const calculSalaireAnnuelNetBrut = (
  annuelInputNet,
  setBrut,
  setBrutHoraire,
  setBrutAnnuel,
  setNet,
  setNetHoraire,
) => {
  const netMensuel = FuncCalcul.annuelEnMensuel(annuelInputNet, 12);
  const brutMensuel = FuncCalcul.netEnBrut(netMensuel, 0.2989);
  setNet(netMensuel);
  setBrut(brutMensuel);

  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutMensuel, 12);
  setBrutAnnuel(brutAnnuel);

  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, 35);
  const netHoraire = FuncCalcul.mensuelEnJournalier(netMensuel, 35);
  setBrutHoraire(brutHoraire);
  setNetHoraire(netHoraire);
};
