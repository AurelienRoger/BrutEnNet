import { Container, Header } from 'semantic-ui-react';
import './Paragraphe.scss';

function Paragraphe() {
  return (
    <div>
      <Container fluid textAlign="left">
        <Header as="h2">Utilisation du convertisseur</Header>
        <p className="paragraphe">
          Les pourcentages indiqués sont une moyenne, et la formule de calcul exact étant inconnue,
          les résultats donnés par cette conversion, malgré le fait de vouloir
          se rapprocher au maximum du montant final se veulent approximatif.
        </p>
        <p className="paragraphe">Vous avez la possibilité de renseigner n’importe quel champs afin que le montant
          soit converti. Sélectionnez une option en fonction de votre statut,
          le nombre d’heures travaillé par semaine, ainsi que le nombre de mois.
        </p>
        <p className="paragraphe">
          Par défaut, le statut est “non-cadre”, 35 heures pour 12 mois.
          Une fois votre résultat obtenue, vous pouvez ajuster en fonction de votre
          pourcentage de prélèvement à la source.
        </p>
      </Container>
    </div>
  );
}

export default Paragraphe;
