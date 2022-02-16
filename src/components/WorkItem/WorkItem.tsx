import { motion } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Work } from "../../assets/data/work"
import styles from "./WorkItem.module.css"

interface IWork extends Work {
    cN?: string
}

function WorkItem({ name, url, tags, img, cN }: IWork) {
    return (
        <motion.figure
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.9 }}
            className={
                styles.item +
                " d-flex justify-content-center align-items-center" +
                cN
            }
            data-name={name}
            data-url={url}
            data-tags={tags}
        >
            <LazyLoadImage
                alt={name}
                height={"100%"}
                width={"100%"}
                src={img}
                style={{ objectFit: "cover" }}
            />
            <figcaption>{name}</figcaption>
        </motion.figure>
    )
}

export default WorkItem
