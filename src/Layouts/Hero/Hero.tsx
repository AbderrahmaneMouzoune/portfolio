import isMobile from 'is-mobile'
import Button from '../../components/Button/Button'
import styles from './Hero.module.css'
import Planet from '../../assets/img/planets/planete_cercle_violet.module.svg'
import Astronaute from '../../assets/img/planets/astronaute.module.svg'
import PlanetOrange from '../../assets/img/planets/planete_orange.module.svg'
import { useState, useEffect } from 'react'

function Hero() {
    return (
        <main id="hero" className={styles.main}>
            <h1 className={styles.title}>Abderrahmane MOUZOUNE</h1>
            <h2 className={styles.subtitle}>Développeur web</h2>
            <div
                className={styles.btnWrapper + (isMobile() ? ' flex-wrap' : '')}
            >
                <Button
                    value={'En savoir plus'}
                    link={'#about'}
                    classname={'m-1'}
                />
                <Button
                    value={'Contactez-moi'}
                    link={'#contact'}
                    classname={'m-1'}
                />
            </div>

            <div className={'position-absolute ' + styles.galaxyWrapper}>
                <img
                    className={styles.astronaute}
                    src={Astronaute}
                    alt="Astronaute avec un drapeau"
                />
                <img
                    className={styles.planet}
                    src={Planet}
                    alt="Planete avec un cercle"
                />
            </div>

            <img
                className={'position-absolute ' + styles.planetOrange}
                src={PlanetOrange}
                alt="Planete orange avec cercle violet"
            />
        </main>
    )
}

export default Hero
