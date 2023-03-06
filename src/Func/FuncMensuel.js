export const calculSalaireBrutNet = (brutNumber, setNet, setBrutHoraire, setNetHoraire) => {
  const result = Math.round((1 - 0.23) * brutNumber);
  const resultNetHoraire = (result / ((35 * 52) / 12)).toFixed(2);
  const resultBrutHoraire = (brutNumber / ((35 * 52) / 12)).toFixed(2);
  setNet(result);
  setBrutHoraire(resultBrutHoraire);
  setNetHoraire(resultNetHoraire);
};

export const calculSalaireNetBrut = (netNumber, setBrut, setBrutHoraire, setNetHoraire) => {
  const result = Math.round((1 + 0.2989) * netNumber);
  const resultBrutHoraire = (result / ((35 * 52) / 12)).toFixed(2);
  const resultNetHoraire = (netNumber / ((35 * 52) / 12)).toFixed(2);
  setBrut(result);
  setBrutHoraire(resultBrutHoraire);
  setNetHoraire(resultNetHoraire);
};
