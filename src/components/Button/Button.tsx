import styles from './Button.module.css'

interface IButton {
    value: string
    link: string
    isFilled?: boolean
    classname?: string
}

function Button({ value, link, isFilled, classname }: IButton) {
    return (
        <a
            className={
                (isFilled ? styles.btnFilled : styles.btn) +
                ' ' +
                (classname ? classname : '')
            }
            href={link}
        >
            {value}
        </a>
    )
}

export default Button
