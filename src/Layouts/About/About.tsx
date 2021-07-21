import Button from '../../components/Button/Button'
import styles from './About.module.css'
import AbderrahmaneMouzoune from '../../assets/img/abderrahmane_mouzoune.png'

function About() {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <figure className={styles.imgWrapper}>
                    <img className={styles.img} src={AbderrahmaneMouzoune} alt="Abderrahmane MOUZOUNE" />
                </figure>

                <div className={styles.aboutWrapper}>
                    <h2 className={"m-0"}>🚀A propos de moi</h2>
                    <p>
                        Je m'appelle Abderrahmane MOUZOUNE, on m'appelle plus
                        souvent ABD ou Abder 😁 <br /> <br />
                        Développeur Web Junior avec une appétence pour le front-end.{' '}
                        <br /> <br />
                        Passionné par le monde du Web et des nouvelles technologies.{' '}
                        <br /> <br />
                        Développons un monde plus ergonomique, plus intuitif.
                    </p>

                    <div>
                        <span className={"color-secondary"}>&lt;</span> Apprendre <span className={"color-secondary"}>/&gt;</span> 
                    </div>

                    <Button value={"Télécharger mon cv"} link={"#cv"} classname={"mt-3"} />
                </div>
            </div>
        </main>
    )
}

export default About
