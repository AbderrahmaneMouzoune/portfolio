import Button from '../../components/Button/Button'
import styles from './About.module.css'
import AbderrahmaneMouzoune from '../../assets/img/abderrahmane_mouzoune.module.png'
import { Col, Container, Row } from 'reactstrap'
import isMobile from 'is-mobile'
import AnimateText from '../../components/AnimateText/AnimateText'
import Planet from '../../assets/img/planets/planete_1.module.svg'
import PlanetBlue from '../../assets/img/planets/planete_2.module.svg'
import PlanetPink from '../../assets/img/planets/planete_5.module.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function About() {
    return (
        <main id="about" className={styles.main}>
            <Container className={'d-flex justify-content-center'}>
                <Row>
                    <Col
                        md={5}
                        sm={12}
                        tag="figure"
                        className={styles.imgWrapper}
                    >
                        <img
                            className={styles.img}
                            src={AbderrahmaneMouzoune}
                            alt={'Abderrahmane MOUZOUNE'}
                        />

                        <LazyLoadImage
                            className={styles.planetBlue}
                            src={PlanetBlue}
                            alt={'Lot of amazing planet'}
                        />

                        <LazyLoadImage
                            className={styles.planetBis}
                            src={PlanetPink}
                            alt={'Lot of amazing planet'}
                        />
                    </Col>

                    <Col sm={12} className={styles.aboutWrapper + ' ms-3'}>
                        <h2 className={'m-0'}>A propos de moi</h2>
                        <div>
                            <p>
                                {' '}
                                Bonjour ! Je m&apos;appelle Abderrahmane
                                MOUZOUNE, on m&apos;appelle plus souvent ABD ou
                                Abder.{' '}
                                <span role="img" aria-label="sourire">
                                    😁
                                </span>{' '}
                            </p>
                            <p>
                                Développeur Web avec une appétence pour le
                                front-end.
                            </p>
                            <p>
                                Passionné par le monde du Web et des nouvelles
                                technologies.{' '}
                            </p>
                            <p className={'pt-3'}>
                                Développons un monde plus ergonomique, plus
                                intuitif.
                            </p>
                        </div>

                        <div>
                            <AnimateText
                                values={['Apprendre', 'Créer', 'Innover']}
                            />
                        </div>

                        <Button
                            value={'Télécharger mon cv'}
                            link={'#cv'}
                            classname={
                                'mt-3' + (isMobile() ? ' me-auto ms-auto' : '')
                            }
                            isFilled
                        />
                    </Col>
                </Row>

                <LazyLoadImage
                    className={styles.planet}
                    src={Planet}
                    alt={'Green amazing planet'}
                />
            </Container>
        </main>
    )
}

export default About
