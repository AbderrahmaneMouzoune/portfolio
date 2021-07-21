import styles from './Button.module.css'

interface IButton {
    value: string
    link: string
    classname?: string
}

function Button({ value, link, classname }: IButton) {
    return (
        <a
            className={styles.btn + ' ' + (classname ? classname : '')}
            href={link}
        >
            {value}
        </a>
    )
}

export default Button
