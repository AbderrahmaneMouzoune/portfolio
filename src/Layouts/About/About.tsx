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
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function About() {
    const [y, setY] = useState(0)

    useEffect(() => {
        setY(
            document.getElementById('about')?.getBoundingClientRect()?.top || 0
        )

        window.addEventListener('scroll', () =>
            setY(
                document.getElementById('about')?.getBoundingClientRect()
                    ?.top || 0
            )
        )

        return () => {
            window.removeEventListener('scroll', () =>
                setY(
                    document.getElementById('about')?.getBoundingClientRect()
                        ?.top || 0
                )
            )
        }
    }, [])

    const maxY = isMobile() ? 40 : 250

    return (
        <motion.main id="about" className={styles.main}>
            <Container
                className={'d-flex justify-content-center'}
                style={{
                    transform: `translateY(-${
                        Math.abs(y * 0.5) > maxY ? maxY : Math.abs(y * 0.5)
                    }px)`,
                }}
            >
                <Row className={'justify-content-center'}>
                    <Col
                        id={'me'}
                        md={'5'}
                        sm={'10'}
                        tag="figure"
                        className={styles.imgWrapper + ' col col-10'}
                    >
                        <motion.img
                            className={styles.img}
                            src={AbderrahmaneMouzoune}
                            alt={'Abderrahmane MOUZOUNE'}
                            style={{ marginTop: `${y * 0.08}px`, rotate: 4 }}
                            whileTap={{ scale: 0.9, rotate: -4 }}
                        />
                        <motion.div
                            className={styles.imgBefore}
                            style={{
                                marginTop: `${-(!isMobile() && y * 0.01)}px`,
                                background: `transparent linear-gradient(${
                                    y * 0.4
                                }deg, #DF6A54 0%, #DE007B 100%) 0% 0% no-repeat padding-box`,
                                rotate: -4,
                            }}
                        />

                        <LazyLoadImage
                            className={styles.planetBlue}
                            src={PlanetBlue}
                            alt={'Lot of amazing planet'}
                            style={{ transform: `translateY(${y * 0.05}px)` }}
                        />

                        <LazyLoadImage
                            className={styles.planetBis}
                            src={PlanetPink}
                            alt={'Lot of amazing planet'}
                            style={{ transform: `translateY(-${y * 0.1}px)` }}
                        />
                    </Col>

                    <Col sm={12} className={styles.aboutWrapper + ' ms-3'}>
                        <h2 className={'m-0'}>A propos de moi</h2>
                        <div className={styles.specialWrapper}>
                            <p>
                                {' '}
                                Bonjour ! Je m&apos;appelle{' '}
                                <span className={styles.specialHover}>
                                    Abderrahmane MOUZOUNE
                                </span>
                                , on m&apos;appelle plus souvent ABD ou Abder.{' '}
                                <span role="img" aria-label="sourire">
                                    😁
                                </span>{' '}
                            </p>
                            <p>
                                Avec une constante{' '}
                                <span className={styles.specialHover}>
                                    envie d&apos;apprendre
                                </span>{' '}
                                et une{' '}
                                <span className={styles.specialHover}>
                                    capacité d&apos;adaptation
                                </span>{' '}
                                élevée je suis prêt à participer à
                                n&apos;importe quel projet Front-End, Back-End,
                                Full-Stack et même Mobile
                            </p>
                            <p className={'pt-3'}>
                                Passionné par le monde du Web et des nouvelles
                                technologies. Développons un monde plus{' '}
                                <span className={styles.specialHover}>
                                    ergonomique
                                </span>
                                , plus{' '}
                                <span className={styles.specialHover}>
                                    intuitif
                                </span>{' '}
                                .
                            </p>
                        </div>

                        <div>
                            <AnimateText
                                values={['Apprendre', 'Créer', 'Innover']}
                            />
                        </div>

                        <div style={{ transform: `translateY(${y * 0.1}px)` }}>
                            <Button
                                value={'Télécharger mon cv'}
                                link={'#cv'}
                                classname={
                                    'mt-3' +
                                    (isMobile() ? ' me-auto ms-auto' : '')
                                }
                                isFilled
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <motion.img
                className={styles.planet}
                src={Planet}
                alt={'Light planet'}
                style={{ transform: `translateY(${y * 0.4}px)` }}
            />
        </motion.main>
    )
}

export default About
