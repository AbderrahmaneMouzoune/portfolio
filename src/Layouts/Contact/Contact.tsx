import { useState } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardImg,
    CardBody,
    CardTitle,
    Form,
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap'
import imgCard from '../../assets/img/contact_square.module.png'
import Button from '../../components/Button/Button'
import styles from './Contact.module.css'
import Astronaut from '../../assets/img/effect/float_astronaut.module.svg'
import Planete from '../../assets/img/planets/planete_9.module.svg'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Contact() {
    const [emailFocus, setEmailFocus] = useState(false)
    const [messageFocus, setMessageFocus] = useState(false)

    return (
        <main id="contact" className={'mt-5 position-relative'}>
            <Container>
                <Row className={'position-relative justify-content-center'}>
                    <Col lg={4} md={5}>
                        <Card className={'card-register ' + styles.cardWrapper}>
                            <CardHeader className={styles.cardHeader}>
                                <CardImg
                                    className={styles.img}
                                    alt="..."
                                    src={imgCard}
                                />
                                <CardTitle className={styles.titleImg} tag="h2">
                                    Contact
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form
                                    className={
                                        'form d-flex flex-wrap h-100 align-content-start'
                                    }
                                >
                                    <InputGroup
                                        className={
                                            'input-group mb-2' +
                                            (emailFocus
                                                ? ' input-group-focus'
                                                : '')
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText
                                                className={styles.inputPrepend}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            className={styles.input}
                                            placeholder="Email"
                                            type="email"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            'input-group mb-2' +
                                            (messageFocus
                                                ? ' input-group-focus'
                                                : '')
                                        }
                                    >
                                        <Input
                                            className={styles.inputArea}
                                            placeholder="Comment je peux vous aider ?"
                                            type="textarea"
                                            onFocus={() =>
                                                setMessageFocus(true)
                                            }
                                            onBlur={() =>
                                                setMessageFocus(false)
                                            }
                                            rows={7}
                                        />
                                    </InputGroup>

                                    <Button
                                        isFilled
                                        value={'Envoyer le message'}
                                        link={''}
                                        classname={'mt-3 ' + styles.btn}
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

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
            />
        </main>
    )
}

export default Contact
