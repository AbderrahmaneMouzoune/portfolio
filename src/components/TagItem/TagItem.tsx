import { Tag } from '../../assets/data/work'
import styles from './TagItem.module.css'

interface ITagItem {
    name: Tag
    isActive: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined
}

function TagItem({ name, isActive, onClick, onKeyDown }: ITagItem) {
    return (
        <div
            role="button"
            className={
                'me-2 mb-2 text-uppercase ' +
                (isActive ? styles.itemActive : styles.item)
            }
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={0}
        >
            {name}
        </div>
    )
}

export default TagItem
