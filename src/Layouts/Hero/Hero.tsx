import isMobile from 'is-mobile'
import Button from '../../components/Button/Button'
import styles from './Hero.module.css'
import Planet from '../../assets/img/planets/planete_cercle_violet.module.svg'
import Astronaute from '../../assets/img/planets/astronaute.module.svg'
import PlanetOrange from '../../assets/img/planets/planete_8.module.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Hero() {
    const [y, setY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () =>
            setY(
                document.getElementById('hero')?.getBoundingClientRect()?.top ||
                    0
            )
        )

        return () => {
            window.removeEventListener('scroll', () =>
                setY(
                    document.getElementById('hero')?.getBoundingClientRect()
                        ?.top || 0
                )
            )
        }
    }, [])

    return (
        <motion.main id="hero" className={styles.main}>
            <motion.div>
                <h1 className={styles.title}>Abderrahmane MOUZOUNE</h1>
                <h2 className={styles.subtitle}>Développeur web</h2>
                <div
                    className={
                        styles.btnWrapper + (isMobile() ? ' flex-wrap' : '')
                    }
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
            </motion.div>

            <motion.div
                style={{ transform: `translateY(${y * 0.2}px)` }}
                className={'position-absolute ' + styles.galaxyWrapper}
                whileTap={{ scale: 0.9 }}
            >
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
            </motion.div>

            <LazyLoadImage
                style={{ transform: `translateY(${y * 0.05}px)` }}
                className={'position-absolute ' + styles.planetOrange}
                src={PlanetOrange}
                alt="Planete orange avec cercle violet"
            />
        </motion.main>
    )
}

export default Hero
