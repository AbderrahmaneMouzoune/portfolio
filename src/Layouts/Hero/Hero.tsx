import Button from '../components/Button/Button'
import styles from './Hero.module.css'

function Hero() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Abderrahmane MOUZOUNE</h1>
            <h2 className={styles.subtitle}>Développeur web</h2>
            <div className={styles.btnWrapper}>
                <Button value={"En savoir plus"} link={"#about"} classname={"m-1"} />
                <Button value={"Contactez-moi"} link={"#contact"} classname={"m-1"} />
            </div>
        </main>
    )
}

export default Hero
