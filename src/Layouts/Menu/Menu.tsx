import styles from './Menu.module.css'

import { Container, Row, Col } from 'reactstrap'
import MenuLink from '../../components/MenuLink/MenuLink'
import Fade from 'react-reveal/Fade'

function Menu() {
    return (
        <header id="menu" className={'p-5 ' + styles.header}>
            <Container>
                <Row className={'flex-nowrap'}>
                    <Col>
                        <Fade top>
                            <span className="text-uppercase">Abderrahmane</span>
                        </Fade>
                    </Col>

                    <Col className={'d-flex justify-content-end'}>
                        <Fade top>
                            <MenuLink
                                label={'About'}
                                link={'#about'}
                                cN={'me-5'}
                            />
                        </Fade>
                        <Fade top>
                            <MenuLink
                                label={'Works'}
                                link={'#works'}
                                cN={'me-5'}
                            />
                        </Fade>
                        <Fade top>
                            <MenuLink label={'Contact'} link={'#contact'} />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Menu
