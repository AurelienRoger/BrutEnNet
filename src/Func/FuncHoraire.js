import FuncCalcul from './FuncCalcul';

export const calculSalaireHoraireBrutNet = (
  brutHoraireNumber,
  setNet,
  setBrut,
  setNetHoraire,
  setNetAnnuel,
  setBrutAnnuel,
  percent,
) => {
  const percentCalc = percent / 100;
  // mensuel
  const brutMensuel = FuncCalcul.journalierEnMensuel(brutHoraireNumber, 35);
  setBrut(brutMensuel);
  const netMensuel = FuncCalcul.brutEnNet(brutMensuel, percentCalc);
  setNet(netMensuel);

  // annuel
  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutMensuel, 12);
  const netAnnuel = FuncCalcul.mensuelEnAnnuel(netMensuel, 12);
  setBrutAnnuel(brutAnnuel);
  setNetAnnuel(netAnnuel);

  // journalier
  const netHoraire = FuncCalcul.mensuelEnJournalier(netMensuel, 35);
  setNetHoraire(netHoraire);
};

export const calculSalaireHoraireNetBrut = (
  netHoraireNumber,
  setNet,
  setBrut,
  setBrutHoraire,
  setNetAnnuel,
  setBrutAnnuel,
  percent,
) => {
  const percentCalc = percent / 100;
  const percentNet = percentCalc + 0.0689;
  // mensuel
  const netMensuel = FuncCalcul.journalierEnMensuel(netHoraireNumber, 35);
  setNet(netMensuel);
  const brutMensuel = FuncCalcul.netEnBrut(netMensuel, percentNet);
  setBrut(brutMensuel);

  // annuel
  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutMensuel, 12);
  const netAnnuel = FuncCalcul.mensuelEnAnnuel(netMensuel, 12);
  setBrutAnnuel(brutAnnuel);
  setNetAnnuel(netAnnuel);

  // journalier
  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, 35);
  setBrutHoraire(brutHoraire);
};
