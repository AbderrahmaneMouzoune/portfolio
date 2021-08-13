import Button from '../../components/Button/Button'
import styles from './About.module.css'
import AbderrahmaneMouzoune from '../../assets/img/abderrahmane_mouzoune.module.png'
import { Col, Container, Row } from 'reactstrap'
import isMobile from 'is-mobile'

function About() {
    return (
        <main id="about" className={styles.main}>
            <Container className={'d-flex justify-content-center'}>
                <Row>
                    <figure className={styles.imgWrapper}>
                        <img
                            className={styles.img}
                            src={AbderrahmaneMouzoune}
                            alt={'Abderrahmane MOUZOUNE'}
                        />
                    </figure>

                    <Col className={styles.aboutWrapper + ' ms-3'}>
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
                            <span className={'color-secondary'}>&lt;</span>
                            Apprendre
                            <span className={'color-secondary'}>/&gt;</span>
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
            </Container>
        </main>
    )
}

export default About
