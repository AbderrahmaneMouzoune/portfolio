import styles from "./Menu.module.css"

import { Container, Row, Col } from "reactstrap"
import MenuLink from "../../Components/MenuLink/MenuLink"
import isMobile from "is-mobile"
import Anagram from "../../assets/img/icon/favicon.module.svg"

function Menu() {
    return (
        <header
            id="menu"
            className={`${isMobile() ? "p-3" : "p-5"} ` + styles.header}
        >
            <Container>
                <Row className={"flex-nowrap"}>
                    <Col>
                        <img
                            className={styles.icon}
                            src={Anagram}
                            alt={"Anagramme Abderrahmane MOUZOUNE"}
                        />
                    </Col>

                    {isMobile() ? (
                        <>
                            <Col>
                                <MenuLink label={"About"} link={"#about"} />
                            </Col>
                            <Col>
                                <MenuLink label={"Contact"} link={"#contact"} />
                            </Col>
                            <Col>
                                <MenuLink label={"Works"} link={"#works"} />
                            </Col>
                        </>
                    ) : (
                        <Col className={"d-flex justify-content-end"}>
                            <MenuLink
                                label={"About"}
                                link={"#about"}
                                cN={"me-5"}
                            />
                            <MenuLink
                                label={"Works"}
                                link={"#works"}
                                cN={"me-5"}
                            />
                            <MenuLink label={"Contact"} link={"#contact"} />
                        </Col>
                    )}
                </Row>
            </Container>
        </header>
    )
}

export default Menu
