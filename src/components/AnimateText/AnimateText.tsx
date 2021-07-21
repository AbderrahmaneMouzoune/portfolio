import styles from './AnimateText.module.css'

interface IAnimateText {
    values: string[]
}

function AnimateText({ values }: IAnimateText) {
    return (
        <div className={styles.AnimateText}>
            <span className={'color-secondary'}>&lt;</span>
            {values.map((value, i) => {
                return <span key={i}>{value}</span>
            })}
            <span className={'color-secondary'}>/&gt;</span>
        </div>
    )
}

export default AnimateText
