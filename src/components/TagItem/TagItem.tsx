import { motion } from "framer-motion"
import { Tag } from "../../assets/data/work"
import styles from "./TagItem.module.css"

interface ITagItem {
    name: Tag
    isActive: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

function TagItem({ name, isActive, onClick }: ITagItem) {
    return (
        <motion.div
            whileTap={{ scale: isActive ? 1 : 0.9 }}
            whileHover={{ scale: isActive ? 1 : 1.05 }}
            role="button"
            className={
                "me-2 mb-2 text-uppercase " +
                (isActive ? styles.itemActive : styles.item)
            }
            onClick={onClick}
            onKeyPress={(e) => (e.key === "Enter" ? onClick : null)}
            tabIndex={0}
        >
            {name}
        </motion.div>
    )
}

export default TagItem
