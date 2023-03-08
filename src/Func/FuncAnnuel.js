import FuncCalcul from './FuncCalcul';

export const calculSalaireAnnuelBrutNet = (
  annuelInputBrut,
  setBrut,
  setBrutHoraire,
  setNetAnnuel,
  setNet,
  setNetHoraire,
  percent,
  hour,
  month,
) => {
  const percentCalc = percent / 100;
  const brutMensuel = FuncCalcul.annuelEnMensuel(annuelInputBrut, month);
  setBrut(brutMensuel);
  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, hour);
  setBrutHoraire(brutHoraire);

  const netAnnuel = FuncCalcul.brutEnNet(annuelInputBrut, percentCalc);
  setNetAnnuel(netAnnuel);
  const netMensuel = FuncCalcul.annuelEnMensuel(netAnnuel, month);
  setNet(netMensuel);
  const netHoraire = FuncCalcul.mensuelEnJournalier(netMensuel, hour);
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
  hour,
  month,
) => {
  const percentCalc = percent / 100;
  const percentNet = percentCalc + 0.0689;

  const netMensuel = FuncCalcul.annuelEnMensuel(annuelInputNet, month);
  const brutMensuel = FuncCalcul.netEnBrut(netMensuel, percentNet);
  setNet(netMensuel);
  setBrut(brutMensuel);

  const brutAnnuel = FuncCalcul.mensuelEnAnnuel(brutMensuel, month);
  setBrutAnnuel(brutAnnuel);

  const brutHoraire = FuncCalcul.mensuelEnJournalier(brutMensuel, hour);
  const netHoraire = FuncCalcul.mensuelEnJournalier(netMensuel, hour);
  setBrutHoraire(brutHoraire);
  setNetHoraire(netHoraire);
};
