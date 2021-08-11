import { useState, useEffect } from 'react'
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

function Contact() {
    const [squares1to6, setSquares1to6] = useState('')
    const [squares7and8, setSquares7and8] = useState('')

    const [emailFocus, setEmailFocus] = useState(false)
    const [messageFocus, setMessageFocus] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('register-page')
        document.documentElement.addEventListener('mousemove', followCursor)
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle('register-page')
            document.documentElement.removeEventListener(
                'mousemove',
                followCursor
            )
        }
    }, [])
    const followCursor = (event: { clientX: number; clientY: number }) => {
        const posX = event.clientX - window.innerWidth / 2
        const posY = event.clientY - window.innerWidth / 6
        setSquares1to6(
            'perspective(500px) rotateY(' +
                posX * 0.05 +
                'deg) rotateX(' +
                posY * -0.05 +
                'deg)'
        )
        setSquares7and8(
            'perspective(500px) rotateY(' +
                posX * 0.02 +
                'deg) rotateX(' +
                posY * -0.02 +
                'deg)'
        )
    }

    return (
        <main id="contact" className={''}>
            <Container>
                <Row>
                    <Col lg="5" md="6">
                        <div
                            className="square square-7"
                            id="square7"
                            style={{ transform: squares7and8 }}
                        />
                        <div
                            className="square square-8"
                            id="square8"
                            style={{ transform: squares7and8 }}
                        />
                        <Card className="card-register">
                            <CardHeader>
                                <CardImg alt="..." src={imgCard} />
                                <CardTitle tag="h4">Register</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form className="form">
                                    <InputGroup
                                        className={
                                            'input-group' +
                                            (emailFocus
                                                ? ' input-group-focus'
                                                : '')
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="tim-icons icon-email-85" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Email"
                                            type="text"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            'input-group' +
                                            (messageFocus
                                                ? ' input-group-focus'
                                                : '')
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="tim-icons icon-lock-circle" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Comment je peux vous aider ?"
                                            type="text"
                                            onFocus={() =>
                                                setMessageFocus(true)
                                            }
                                            onBlur={() =>
                                                setMessageFocus(false)
                                            }
                                        />
                                    </InputGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    value={'Envoyer le message'}
                                    link={''}
                                />
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <div className="register-bg" />
                <div
                    className="square square-1"
                    id="square1"
                    style={{ transform: squares1to6 }}
                />
                <div
                    className="square square-2"
                    id="square2"
                    style={{ transform: squares1to6 }}
                />
                <div
                    className="square square-3"
                    id="square3"
                    style={{ transform: squares1to6 }}
                />
                <div
                    className="square square-4"
                    id="square4"
                    style={{ transform: squares1to6 }}
                />
                <div
                    className="square square-5"
                    id="square5"
                    style={{ transform: squares1to6 }}
                />
                <div
                    className="square square-6"
                    id="square6"
                    style={{ transform: squares1to6 }}
                />
            </Container>
        </main>
    )
}

export default Contact
