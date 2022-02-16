import { Works, TAGS, Tag, Work } from "../../assets/data/work"
import { useEffect, useState } from "react"
import WorkItem from "../../Components/WorkItem/WorkItem"
import TagItem from "../../Components/TagItem/TagItem"
import styles from "./Work.module.css"
import { Container, Row } from "reactstrap"
import { isMobile } from "is-mobile"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Planet from "../../assets/img/planets/planete_3.module.svg"
import PlanetBig from "../../assets/img/planets/planete_11.module.svg"
import { motion, AnimateSharedLayout } from "framer-motion"

export default function Portfolio() {
    const [actualTag, setActualTag] = useState("")

    const filterTags = (Tags: Tag[]) =>
        Tags.filter((tag) => Works.some((work) => work.tags.includes(tag)))
    const filterWorks = (Works: Work[]) =>
        Works.filter(
            (work) => work.tags.includes(actualTag) || actualTag === ""
        )

    const [y, setY] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () =>
            setY(
                document.getElementById("works")?.getBoundingClientRect()
                    ?.top || 0
            )
        )

        return () => {
            window.removeEventListener("scroll", () =>
                setY(
                    document.getElementById("works")?.getBoundingClientRect()
                        ?.top || 0
                )
            )
        }
    }, [])

    return (
        <motion.main id="works" className={styles.main}>
            <Container>
                <h2 className={styles.title + " pb-5"}>Works</h2>
                <Row className={"justify-content-center"}>
                    {filterTags(TAGS).length > 1 && (
                        <TagItem
                            key={"all"}
                            name={"Tous"}
                            isActive={actualTag === ""}
                            onClick={() => setActualTag("")}
                        />
                    )}
                    {filterTags(TAGS).map((tag, i) => (
                        <TagItem
                            key={i.toString()}
                            name={tag}
                            isActive={tag === actualTag}
                            onClick={() => setActualTag(tag)}
                        />
                    ))}
                </Row>

                <AnimateSharedLayout>
                    <motion.div className={"row mt-5 position-relative"}>
                        {/* Display work with actual tag */}
                        {filterWorks(Works).map((work, i) => (
                            <motion.div
                                key={i}
                                className={
                                    "col-sm-6 col-md-4" +
                                    (i > 2 || (isMobile() && i > 0)
                                        ? " mt-4"
                                        : "")
                                }
                            >
                                <WorkItem {...work} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimateSharedLayout>
            </Container>

            <LazyLoadImage
                className={styles.planet}
                src={Planet}
                alt={"An awesome planet"}
                style={{ transform: `translateY(${y * 0.05}px)` }}
            />

            <LazyLoadImage
                className={styles.planetBig}
                src={PlanetBig}
                alt={"An awesome planet"}
                style={{ transform: `translateY(-${y * 0.05}px)` }}
            />
        </motion.main>
    )
}
