# BrutEnNet

## Etape 1

### Installation d'un react model

- Installation de React

### Installation de Sementic UI React

- Installation de Sementic Ui react
- Installation de Fomentic Ui pour palier le bug de Sementic Ui

## Etape 2

### Intégration d'un formulaire

- Intégration d'un formulaire simplifié avec 2 champs:
 - Salaire Mensuel Brut
 - Salaire Mensuel Net

## Etape 3

### Control des champs de formulaire

- Controle du champs en Brut
- Controle du champs en Net
- Ajout type "number" pour les Inputs

## Etape 4

### Calcul du brut en net et vice versa

- Si Salaire brut rentré, enlever 23%
- Si salaire net rentré, ajouter 29%
- Arrondissement des valeurs

## Etape 5

### Utilisation de useEffect 

- Au changement du brut pour avoir un re-rendu instantané lors de l'entrée du salaire brut
- Au changement du net pour avoir un re-rendu instantané lors de l'entrée du salaire net
- Utilisation de bool pour verrouiller le calcul sur l'autre champs
- Fix de la formule de calcul du net en brut
- Arrondir les chiffre à la sortie à 2 chiffre après la virgule

## Etape 5

### Ajout d'un composant

- Ajout d'un composant Header

## Etape 6

### Form horaire

- Ajout form pour horaire Brut et Horaire Net

## Etape 7

### Factorisation + modif champs horaire

- Factorisation des form.group 
- Modification des function pour affichage des taux horaire lors d'une entré

## Etape 8

### Ajout des fonctions taux horaire

- Ajout de la fonction pour calculer à partir du champs de taux horaire
- Calcul pour le taux horaire brut
- Calcul pour le taux horaire net

## Etape 9

### Intégration input

- Intégration des inputs Annuel brut et annuel net


## Etape 10

### input annuel & découpage fonctions

- Assuré le fonctionnement des inputs annuel
- Découpage des fonctions de calculs en plusieurs fichiers

## Etape 11

### Ajout labels

- Ajout de label -23% aux champs salaire net ..

## Etape 12

### Modification pourcent

- Ajout des valeur dynamique pour les label de pourcentage
- Mise des valeurs dynamique dans les fonctions