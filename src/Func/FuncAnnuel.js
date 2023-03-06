import FuncCalcul from './FuncCalcul';

export const calculSalaireAnnuelBrutNet = (
  annuelInputBrut,
  setBrut,
  setBrutHoraire,
  setNetAnnuel,
  setNet,
  setNetHoraire,
  percent,
) => {
  const percentCalc = percent / 100;
  const brutMensuel = FuncCalcul.annuelEnMensuel(annuelInputBrut, 12);
  setBrut(brutMensuel);
  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, 35);
  setBrutHoraire(brutHoraire);

  const netAnnuel = FuncCalcul.brutEnNet(annuelInputBrut, percentCalc);
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
  percent,
) => {
  const percentCalc = percent / 100;
  const percentNet = percentCalc + 0.0689;

  const netMensuel = FuncCalcul.annuelEnMensuel(annuelInputNet, 12);
  const brutMensuel = FuncCalcul.netEnBrut(netMensuel, percentNet);
  setNet(netMensuel);
  setBrut(brutMensuel);

  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutMensuel, 12);
  setBrutAnnuel(brutAnnuel);

  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, 35);
  const netHoraire = FuncCalcul.mensuelEnJournalier(netMensuel, 35);
  setBrutHoraire(brutHoraire);
  setNetHoraire(netHoraire);
};
