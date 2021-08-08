import Col from 'reactstrap/es/Col'
import { Tag } from '../../assets/data/work'
import styles from './TagItem.module.css'

interface ITagItem {
    name: Tag
    isActive: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

function TagItem({ name, isActive, onClick }: ITagItem) {
    return (
        <div
            role="button"
            className={'me-2 ' + (isActive ? styles.itemActive : styles.item)}
            onClick={onClick}
        >
            {name}
        </div>
    )
}

export default TagItem
