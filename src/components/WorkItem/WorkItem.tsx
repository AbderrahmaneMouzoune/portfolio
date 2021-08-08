import { Col } from 'reactstrap'
import { Work } from '../../assets/data/work'
import styles from './WorkItem.module.css'

interface IWork extends Work {
    cN?: string
}

function WorkItem({ name, url, tags, cN }: IWork) {
    return (
        <Col md={4} sm={6} className={cN}>
            <div
                className={
                    styles.item +
                    ' d-flex justify-content-center align-items-center'
                }
                data-name={name}
                data-url={url}
                data-tags={tags}
            >
                {name}
            </div>
        </Col>
    )
}

export default WorkItem
