import styles from './Footer.module.css'
import FooterImg from '../../assets/img/footer.module.svg'
import Asteroid from '../../assets/img/float_asteroid.module.svg'
import { Col, Container, Row } from 'reactstrap'
import IconLink from '../../components/IconLink/IconLink'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import isMobile from 'is-mobile'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Footer() {
    return (
        <footer className={'w-100 container-fluid p-0 mt-5 ' + styles.main}>
            <Container tag={'nav'}>
                <Row className={'justify-content-center'}>
                    <Col className={styles.col}>
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
                    <Col
                        className={
                            'd-flex align-items-center justify-content-center'
                        }
                    >
                        <a
                            className={'text-uppercase ' + styles.link}
                            href="mailto:abderrahmane.mouzoune.dev@gmail.com"
                        >
                            abderrahmane.mouzoune.dev@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>

            <LazyLoadImage
                src={Asteroid}
                alt={"That's some asteroid"}
                className={'img-fluid position-absolute ' + styles.asteroid}
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
