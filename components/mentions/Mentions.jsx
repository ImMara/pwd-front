import React from 'react';
import styles from './Mentions.module.scss';

function Mentions(props) {
    return (
        <div className={styles.policy}>
            <h2>Operated by and responsible for Product & Company Information</h2>
            <p>Energy drink</p>
            <p>Am Brunnen 1</p>
            <p>5330 Fuschl am See</p>
            <p>FN 56247 t ATU33864707</p>
            <h3>EN:</h3>
            <p>ou can find information on the media owner in the disclosure according to § 25 Mediengesetz (media law).
                Via http://ec.europa.eu/consumers/odr the European Commission provides an online dispute resolution platform. Apart from the aforementioned platform, Red Bull GmbH will not partake in any additional voluntary dispute resolution procedures before a consumer mediation entity.</p>
            <h3>DE:</h3>
            <p>
                Informationen zum Medieninhaber finden Sie in der Offenlegung nach § 25 Mediengesetz.
                Die Europäische Kommission stellt unter http://ec.europa.eu/consumers/odr eine Plattform zur außergerichtlichen Streitschlichtung bereit. Darüber hinaus nimmt die Red Bull GmbH an einem freiwilligen Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht teil.
            </p>
            <p>© 2020 Energy drink – all rights reserved. All use subject to our Terms of Use.</p>
        </div>
    );
}

export default Mentions;