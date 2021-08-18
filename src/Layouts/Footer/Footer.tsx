import styles from './Footer.module.css'
import FooterImg from '../../assets/img/footer.module.svg'
import Asteroid from '../../assets/img/float_asteroid.module.svg'
import { Col, Container, Row } from 'reactstrap'
import MenuLink from '../../components/MenuLink/MenuLink'
import IconLink from '../../components/IconLink/IconLink'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import isMobile from 'is-mobile'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

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

            <LazyLoadImage
                src={Asteroid}
                alt={"That's some asteroid"}
                className={'img-fluid ' + styles.asteroid}
            />
            <LazyLoadImage
                src={FooterImg}
                alt={'Wee can see Mars'}
                className={'pt-5 ' + styles.footerImg}
            />
        </footer>
    )
}

export default Footer
