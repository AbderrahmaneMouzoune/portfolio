import isMobile from 'is-mobile'
import Button from '../../components/Button/Button'
import styles from './Hero.module.css'
import Planet from '../../assets/img/planets/planete_cercle_violet.module.svg'

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
            <img
                className={'position-absolute ' + styles.planet}
                src={Planet}
                alt="Planete avec un cercle"
            />
        </main>
    )
}

export default Hero
