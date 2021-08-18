import isMobile from 'is-mobile'
import Button from '../../components/Button/Button'
import styles from './Hero.module.css'
import Planet from '../../assets/img/planets/planete_cercle_violet.module.svg'
import Astronaute from '../../assets/img/planets/astronaute.module.svg'
import PlanetOrange from '../../assets/img/planets/planete_8.module.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
                    classname={'m-2'}
                />
                <Button
                    value={'Contactez-moi'}
                    link={'#contact'}
                    classname={'m-2'}
                />
            </div>

            <div className={'position-absolute ' + styles.galaxyWrapper}>
                <LazyLoadImage
                    className={styles.astronaute}
                    src={Astronaute}
                    alt="Astronaute avec un drapeau"
                />
                <LazyLoadImage
                    className={styles.planet}
                    src={Planet}
                    alt="Planete avec un cercle"
                />
            </div>

            <LazyLoadImage
                className={'position-absolute ' + styles.planetOrange}
                src={PlanetOrange}
                alt="Planete orange avec cercle violet"
            />
        </main>
    )
}

export default Hero
