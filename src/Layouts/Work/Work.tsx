import { Works, TAGS, Tag, Work } from '../../assets/data/work'
import { useState } from 'react'
import WorkItem from '../../components/WorkItem/WorkItem'
import TagItem from '../../components/TagItem/TagItem'
import styles from './Work.module.css'
import { Container, Row } from 'reactstrap'
import { isMobile } from 'is-mobile'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Planet from '../../assets/img/planets/planete_3.module.svg'
import PlanetBig from '../../assets/img/planets/planete_11.module.svg'

export default function Portfolio() {
    const [actualTag, setActualTag] = useState('')

    const filterTags = (Tags: Tag[]) =>
        Tags.filter((tag) => Works.some((work) => work.tags.includes(tag)))
    const filterWorks = (Works: Work[]) =>
        Works.filter(
            (work) => work.tags.includes(actualTag) || actualTag === ''
        )

    return (
        <main id="works" className={styles.main}>
            <Container>
                <h2 className={styles.title + ' pb-5'}>Works</h2>
                <Row className={'justify-content-center'}>
                    {filterTags(TAGS).length > 1 && (
                        <TagItem
                            key={'all'}
                            name={'Tous'}
                            isActive={actualTag === ''}
                            onClick={() => setActualTag('')}
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

                <Row className={'mt-5 position-relative'}>
                    {/* Display work with actual tag */}
                    {filterWorks(Works).map(({ name, url, tags }, i) => (
                        <WorkItem
                            key={i}
                            name={name}
                            url={url}
                            tags={tags}
                            cN={i > 2 || (isMobile() && i > 0) ? 'mt-4' : ''}
                        />
                    ))}
                </Row>
            </Container>

            <LazyLoadImage
                className={styles.planet}
                src={Planet}
                alt={'An awesome planet'}
            />

            <LazyLoadImage
                className={styles.planetBig}
                src={PlanetBig}
                alt={'An awesome planet'}
            />
        </main>
    )
}
