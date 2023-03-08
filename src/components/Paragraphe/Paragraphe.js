import { Container, Header } from 'semantic-ui-react';

function Paragraphe() {
  return (
    <div>
      <Container fluid textAlign="left">
        <Header as="h2">Utilisation du convertisseur</Header>
        <p>
          Les pourcentages indiqués sont une moyenne, et la formule de calcul exact étant inconnue,
          les réultats donnés par cette conversion, malgré le fait de vouloir
          se rapprocher au maximum du montant final se veux approximatif.
        </p>
      </Container>
    </div>
  );
}

export default Paragraphe;
