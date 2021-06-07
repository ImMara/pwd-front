import React from 'react';
import styles from "./Protection.module.scss";

function Protection(props) {
    return (
        <div className={styles.policy}>
            <h2>Protection de la marque</h2>
            <p>Energy drink prend la protection de sa marque très au sérieux, espérant que les consommateurs savent que tout ce qui porte sa marque est digne de confiance. Nous possédons un portefeuille international très large de droits de marque déposés ou non-déposés. Aucun de ces droits, ni tous signes susceptibles d’être confondus ne peuvent être utilisés sans l’accord préalable de Red Bull. Red Bull prend toutes les atteintes à ses droits de marque très au sérieux et poursuit en justice tout mésusage.</p>
            <p>En achetant des marchandises de contrefaçon,</p>
            <ul className={styles.list}>
                <li>vous n’aurez pas la qualité Red Bull habituelle, de sorte que finalement, vous payerez un prix plus élevé pour les marchandises que vous recevrez ;</li>
                <li>vous soutenez des criminels et même des groupes de terroristes qui entre autres financent leurs activités en vendant des produits de contrefaçon ;</li>
                <li>vous soutenez la production de marchandises fabriquées dans des conditions inhumaines et/ou malsaines et/ou non respectueuses de l’environnement ;</li>
                <li>vous augmentez votre charge fiscale, étant donné que les contrefacteurs ne paient pas de taxes comme les sociétés qui sont en règle; et les états vous réclameront les taxes que les contrefacteurs ne paient pas.</li>
            </ul>
            <h3>Formulaire de retour concernant la protection de la marque</h3>
            <p>
                Energy drink protège ses droits de marque avec le plus grand soin. Il est dans le plus grand intérêt de Energy Drink d’obtenir toutes informations concernant des produits analogues, des copies et/ou des produits de contrefaçon.Ce qui vous semble trop beau pour être vrai, cache probablement un produit de contrefaçon. Si vous rencontrez de tels produits ou avez des doutes concernant l’authenticité de certains produits, n’hésitez pas à nous contacter sous brandprotection@energydrink.com, ou à utiliser le formulaire ci-après. Le formulaire ou la communication par e-mail vous permet aussi de nous donner toute information supplémentaire utile ou de nous poser des questions à propos de l’authenticité d’un produit, d’une marchandise ou d’un service portant la marque Energy drink, ou d’articles et/ou de services accessoires.
            </p>
        </div>
    );
}

export default Protection;