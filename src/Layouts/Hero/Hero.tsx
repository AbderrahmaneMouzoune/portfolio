import isMobile from 'is-mobile'
import Button from '../../components/Button/Button'
import styles from './Hero.module.css'
import Planet from '../../assets/img/planets/planete_cercle_violet.module.svg'
import Astronaute from '../../assets/img/planets/astronaute.module.svg'
import PlanetOrange from '../../assets/img/planets/planete_orange.module.svg'
import locomotiveScroll from "locomotive-scroll";
import { createRef, useEffect } from 'react'

function Hero() {
    const scrollRef = createRef();

    useEffect(() => {
        const scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true
        });
    });

    return (
        <main ref={scrollRef} id="hero" className={styles.main}>
            <h1 data-scroll data-scroll-speed="3" data-scroll-position="top" className={styles.title}>Abderrahmane MOUZOUNE</h1>
            <h2           data-scroll
          data-scroll-speed="2"
          data-scroll-position="top"
          data-scroll-direction="horizontal" className={styles.subtitle}>Développeur web</h2>
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
