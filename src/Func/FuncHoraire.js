import FuncCalcul from './FuncCalcul';

export function calculSalaireHoraireBrutNet(brutHoraireNumber, setNet, setBrut, setNetHoraire) {
  // 15 € * ((35 Heures * 52 Semaines) / 12 Mois)
  const mensuelBrut = Math.round(brutHoraireNumber * ((35 * 52) / 12));
  const mensuelNet = Math.round((1 - 0.23) * mensuelBrut);
  const horaireNet = ((1 - 0.23) * brutHoraireNumber).toFixed(2);
  setNet(mensuelNet);
  setBrut(mensuelBrut);
  setNetHoraire(horaireNet);
}

export function calculSalaireHoraireNetBrut(netHoraireNumber, setNet, setBrut, setBrutHoraire) {
  // 15 € * ((35 Heures * 52 Semaines) / 12 Mois)
  const mensuelNet = Math.round(netHoraireNumber * ((35 * 52) / 12));
  const mensuelBrut = Math.round((1 + 0.2989) * mensuelNet);
  const horaireBrut = (mensuelBrut / ((35 * 52) / 12)).toFixed(2);
  setNet(mensuelNet);
  setBrut(mensuelBrut);
  setBrutHoraire(horaireBrut);
}
