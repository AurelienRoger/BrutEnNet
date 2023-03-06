import FuncCalcul from './FuncCalcul';

// export function calculSalaireHoraireBrutNet(brutHoraireNumber, setNet, setBrut, setNetHoraire) {
//   // 15 € * ((35 Heures * 52 Semaines) / 12 Mois)
//   const mensuelBrut = Math.round(brutHoraireNumber * ((35 * 52) / 12));
//   const mensuelNet = Math.round((1 - 0.23) * mensuelBrut);
//   const horaireNet = ((1 - 0.23) * brutHoraireNumber).toFixed(2);
//   setNet(mensuelNet);
//   setBrut(mensuelBrut);
//   setNetHoraire(horaireNet);
// }

// export function calculSalaireHoraireNetBrut(netHoraireNumber, setNet, setBrut, setBrutHoraire) {
//   // 15 € * ((35 Heures * 52 Semaines) / 12 Mois)
//   const mensuelNet = Math.round(netHoraireNumber * ((35 * 52) / 12));
//   const mensuelBrut = Math.round((1 + 0.2989) * mensuelNet);
//   const horaireBrut = (mensuelBrut / ((35 * 52) / 12)).toFixed(2);
//   setNet(mensuelNet);
//   setBrut(mensuelBrut);
//   setBrutHoraire(horaireBrut);
// }

export const calculSalaireHoraireBrutNet = (
  brutHoraireNumber,
  setNet,
  setBrut,
  setNetHoraire,
  setNetAnnuel,
  setBrutAnnuel,
) => {
  // mensuel
  const brutMensuel = FuncCalcul.journalierEnMensuel(brutHoraireNumber, 35);
  setBrut(brutMensuel);
  const netMensuel = FuncCalcul.brutEnNet(brutMensuel, 0.23);
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
) => {
  // mensuel
  const netMensuel = FuncCalcul.journalierEnMensuel(netHoraireNumber, 35);
  setNet(netMensuel);
  const brutMensuel = FuncCalcul.netEnBrut(netMensuel, 0.2989);
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
