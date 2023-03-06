import FuncCalcul from './FuncCalcul';

export const calculSalaireAnnuelBrut = (annuelInputBrut, setNet, setBrutHoraire, setNetHoraire) => {
  const resultMensuelBrut = Math.round(annuelInputBrut / 12);
  const resultBrutHoraire = (resultMensuelBrut / ((35 * 52) / 12)).toFixed(2);
  const resultNetHoraire = (result / ((35 * 52) / 12)).toFixed(2);
  setNet(result);
  setBrutHoraire(resultBrutHoraire);
  setNetHoraire(resultNetHoraire);
};

export const calculSalaireAnnuelNet = (netNumber, setBrut, setBrutHoraire, setNetHoraire) => {
  const result = Math.round((1 + 0.2989) * netNumber);
  const resultBrutHoraire = (result / ((35 * 52) / 12)).toFixed(2);
  const resultNetHoraire = (netNumber / ((35 * 52) / 12)).toFixed(2);
  setBrut(result);
  setBrutHoraire(resultBrutHoraire);
  setNetHoraire(resultNetHoraire);
};
