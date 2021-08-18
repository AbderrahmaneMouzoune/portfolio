import styles from './Menu.module.css'

import { Container, Row, Col } from 'reactstrap'
import MenuLink from '../../components/MenuLink/MenuLink'
import isMobile from 'is-mobile'

function Menu() {
    return (
        <header id="menu" className={'p-5 ' + styles.header}>
            <Container>
                <Row className={'flex-nowrap'}>
                    <Col>
                        <span className="text-uppercase">Abderrahmane</span>
                    </Col>

                    {isMobile() ? (
                        <>
                            <Col>
                                <MenuLink label={'About'} link={'#about'} />
                            </Col>
                            <Col>
                                <MenuLink label={'Contact'} link={'#contact'} />
                            </Col>
                            <Col>
                                <MenuLink label={'Works'} link={'#works'} />
                            </Col>
                        </>
                    ) : (
                        <Col className={'d-flex justify-content-end'}>
                            <MenuLink
                                label={'About'}
                                link={'#about'}
                                cN={'me-5'}
                            />
                            <MenuLink
                                label={'Works'}
                                link={'#works'}
                                cN={'me-5'}
                            />
                            <MenuLink label={'Contact'} link={'#contact'} />
                        </Col>
                    )}
                </Row>
            </Container>
        </header>
    )
}

export default Menu
