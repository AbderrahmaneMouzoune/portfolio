import { Works, TAGS, Tag, Work } from '../../assets/data/work'
import { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import WorkItem from '../../components/WorkItem/WorkItem'
import TagItem from '../../components/TagItem/TagItem'
import styles from './Work.module.css'
import { Container, Row } from 'reactstrap'

export default function Portfolio() {
    const [actualTag, setActualTag] = useState('')

    const filterTags = (Tags : Tag[]) => Tags.filter((tag) => Works.some((work) => work.tags.includes(tag)))
    const filterWorks = (Works : Work[]) => Works.filter((work) => work.tags.includes(actualTag) || actualTag === "")

    return (
        <main className={styles.main}>
            <Container>
                <h2 className={styles.title + " pb-5"}>Works</h2>
                <Row className={"justify-content-center"}>
                    {filterTags(TAGS).length > 1 &&
                        <TagItem
                            key={'all'}
                            name={'Tous'}
                            isActive={actualTag === ""}
                            onClick={() => setActualTag("")}
                        />
                    }
                    {filterTags(TAGS).map((tag, i) => (
                        <TagItem
                            key={i.toString()}
                            name={tag}
                            isActive={tag === actualTag}
                            onClick={() => setActualTag(tag)}
                        />
                    ))}
                </Row>
                <TransitionGroup className={'mt-5 row'}>
                    {/* Display work with actual tag */}
                    {filterWorks(Works).map(
                        (work, i) => (
                            <CSSTransition
                                key={i.toString()}
                                timeout={150}
                                classNames={'test'}
                                unmountOnExit
                                appear
                            >
                                <WorkItem
                                    name={work.name}
                                    url={work.url}
                                    tags={work.tags}
                                    cN={i > 2 ? "mt-4" : ""}
                                />
                            </CSSTransition>
                        )
                    )}
                </TransitionGroup>
            </Container>
        </main>
    )
}
