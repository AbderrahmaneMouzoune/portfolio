import { motion } from 'framer-motion'
import styles from './Button.module.css'

interface IButton {
    value: string
    link: string
    isFilled?: boolean
    classname?: string
}

function Button({ value, link, isFilled, classname }: IButton) {
    return (
        <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className={
                (isFilled ? styles.btnFilled : styles.btn) +
                ' ' +
                (classname ? classname : '')
            }
            href={link}
        >
            {value}
        </motion.a>
    )
}

export default Button
