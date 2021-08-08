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
            className={
                'me-2 mb-2 text-uppercase ' +
                (isActive ? styles.itemActive : styles.item)
            }
            onClick={onClick}
        >
            {name}
        </div>
    )
}

export default TagItem
