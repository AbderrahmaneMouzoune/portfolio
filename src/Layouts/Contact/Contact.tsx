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
    CardFooter,
    Input,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap'
import imgCard from '../../assets/img/contact_square.module.png'
import Button from '../../components/Button/Button'
import styles from './Contact.module.css'
import Astronaut from '../../assets/img/effect/float_astronaut.module.svg'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    const [emailFocus, setEmailFocus] = useState(false)
    const [messageFocus, setMessageFocus] = useState(false)

    return (
        <main id="contact" className={'mt-5'}>
            <Container>
                <Row className={'position-relative justify-content-between'}>
                    <Col lg="4" md="5">
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
                                <Form className="form d-flex flex-wrap h-100">
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
                                </Form>
                            </CardBody>
                            <CardFooter className={styles.footer}>
                                <Button
                                    isFilled
                                    value={'Envoyer le message'}
                                    link={''}
                                    classname={'mb-3 ' + styles.btn}
                                />
                            </CardFooter>
                        </Card>
                    </Col>

                    <ParallaxProvider>
                        <Col lg="6" md="6">
                            <Parallax y={[-40, 40]}>
                                <img
                                    className={styles.astronaut}
                                    src={Astronaut}
                                    alt="Astronaute"
                                />
                            </Parallax>
                        </Col>
                    </ParallaxProvider>
                </Row>
            </Container>
        </main>
    )
}

export default Contact
