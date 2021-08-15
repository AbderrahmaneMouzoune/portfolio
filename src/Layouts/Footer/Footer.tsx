import styles from './Footer.module.css'
import FooterImg from '../../assets/img/footer.module.svg'
import Asteroid from '../../assets/img/float_asteroid.module.svg'
import { Col, Container, Row } from 'reactstrap'
import MenuLink from '../../components/MenuLink/MenuLink'
import IconLink from '../../components/IconLink/IconLink'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import isMobile from 'is-mobile'

function Footer() {
    return (
        <footer className={'w-100 container-fluid mt-5 ' + styles.main}>
            <Container tag={'nav'}>
                <Row className={'flex-nowrap'}>
                    <Col>
                        <MenuLink
                            label={'Abderrahmane'}
                            link={'#hero'}
                            cN={'me-5'}
                        />
                        <MenuLink
                            label={'About'}
                            link={'#about'}
                            cN={isMobile() ? '' : 'me-5'}
                        />
                        <MenuLink
                            label={'Works'}
                            link={'#works'}
                            cN={isMobile() ? '' : 'me-5'}
                        />
                        <MenuLink label={'Contact'} link={'#contact'} />
                    </Col>

                    <Col className={'d-flex justify-content-end'}>
                        <IconLink
                            icon={faGithub}
                            link={'https://github.com/AbderrahmaneMouzoune'}
                            cN={isMobile() ? '' : 'me-4'}
                        />
                        <IconLink
                            icon={faLinkedin}
                            link={
                                'https://www.linkedin.com/in/abderrahmane-mouzoune/'
                            }
                        />
                    </Col>
                </Row>
            </Container>
            <object
                className={'img-fluid ' + styles.asteroid}
                type="image/svg+xml"
                data={Asteroid}
                aria-label={"That's some asteroid"}
            />
            <object
                className={'pt-5 ' + styles.footerImg}
                type="image/svg+xml"
                data={FooterImg}
                aria-label={'Wee can see Mars'}
            />
        </footer>
    )
}

export default Footer
