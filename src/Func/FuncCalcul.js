export default class FuncCalcul {
  static annuelEnMensuel(annuel, mois) {
    const result = Math.round(annuel / mois);
    return result;
  }

  static mensuelEnJournalier(mensuel, nombreHeure) {
    const result = (mensuel / ((nombreHeure * 52) / 12)).toFixed(2);
    return result;
  }

  static journalierEnMensuel(horaire, nombreHeure) {
    const result = Math.round(horaire * ((nombreHeure * 52) / 12));
    return result;
  }

  static mensuelEnAnnuel(mensuel, mois) {
    const result = Math.round(mensuel * mois);
    return result;
  }

  static brutEnNet(brut, pourcentage) {
    const result = Math.round((1 - pourcentage) * brut);
    return result;
  }

  static netEnBrut(net, pourcentage) {
  // Si 23% brut-> net alors 29,89% en net -> brut
    const result = Math.round((1 + pourcentage) * net);
    return result;
  }
}
