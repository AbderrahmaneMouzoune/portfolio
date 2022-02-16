import { useEffect, useState } from "react"
import { Container, Row, Col } from "reactstrap"
import styles from "./Contact.module.css"
import Astronaut from "../../assets/img/effect/float_astronaut.module.svg"
import Planete from "../../assets/img/planets/planete_9.module.svg"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { LazyLoadImage } from "react-lazy-load-image-component"

function Contact() {
    const [y, setY] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () =>
            setY(
                document.getElementById("contact")?.getBoundingClientRect()
                    ?.top || 0
            )
        )

        return () => {
            window.removeEventListener("scroll", () =>
                setY(
                    document.getElementById("contact")?.getBoundingClientRect()
                        ?.top || 0
                )
            )
        }
    }, [])

    return (
        <main id="contact" className={"mt-5 position-relative"}>
            <Container
                style={{ transform: `translateY(${(y * 0.05) % 100}px)` }}
            >
                <Row className={"position-relative justify-content-center"}>
                    {/* <Col>
                    <h3 className={'text-uppercase'}>Contact</h3>
                        <h6 className={'text-uppercase'}>
                            Mail :{' '}
                            <a
                                className={styles.link}
                                href="mailto:abderrahmane.mouzoune.dev@gmail.com"
                            >
                                abderrahmane.mouzoune.dev@gmail.com
                            </a>
                        </h6>
                        <h6 className={'text-uppercase'}>
                            Téléphone :{' '}
                            <a
                                className={styles.link}
                                href="mailto:abderrahmane.mouzoune.dev@gmail.com"
                            >
                                +33 7 68 83 76 57
                            </a>
                        </h6>
                    </Col> */}
                    <Col md={5} lg={5} sm={12}>
                        <ParallaxProvider>
                            <Parallax y={[-40, 40]}>
                                <LazyLoadImage
                                    className={styles.astronaut}
                                    src={Astronaut}
                                    alt="Astronaute"
                                />
                            </Parallax>
                        </ParallaxProvider>
                    </Col>
                </Row>
            </Container>

            <LazyLoadImage
                className={styles.planete}
                src={Planete}
                alt="Another awesome planete"
                style={{
                    transform: `translateY(-${Math.abs(y * 0.05)}px)`,
                }}
            />
        </main>
    )
}

export default Contact
