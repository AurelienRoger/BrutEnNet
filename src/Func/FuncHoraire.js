import FuncCalcul from './FuncCalcul';

export const calculSalaireHoraireBrutNet = (
  brutHoraireNumber,
  setNet,
  setBrut,
  setNetHoraire,
  setNetAnnuel,
  setBrutAnnuel,
  percent,
  hour,
  month,
) => {
  const percentCalc = percent / 100;
  // mensuel
  const brutMensuel = FuncCalcul.journalierEnMensuel(brutHoraireNumber, hour);
  setBrut(brutMensuel);
  const netMensuel = FuncCalcul.brutEnNet(brutMensuel, percentCalc);
  setNet(netMensuel);

  // annuel
  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutMensuel, month);
  const netAnnuel = FuncCalcul.mensuelEnAnnuel(netMensuel, month);
  setBrutAnnuel(brutAnnuel);
  setNetAnnuel(netAnnuel);

  // journalier
  const netHoraire = FuncCalcul.mensuelEnJournalier(netMensuel, hour);
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
  hour,
  month,
) => {
  const percentCalc = percent / 100;
  const percentNet = percentCalc + 0.0689;
  // mensuel
  const netMensuel = FuncCalcul.journalierEnMensuel(netHoraireNumber, hour);
  setNet(netMensuel);
  const brutMensuel = FuncCalcul.netEnBrut(netMensuel, percentNet);
  setBrut(brutMensuel);

  // annuel
  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutMensuel, month);
  const netAnnuel = FuncCalcul.mensuelEnAnnuel(netMensuel, month);
  setBrutAnnuel(brutAnnuel);
  setNetAnnuel(netAnnuel);

  // journalier
  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, hour);
  setBrutHoraire(brutHoraire);
};
