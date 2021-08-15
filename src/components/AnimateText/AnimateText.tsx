import { useEffect, useState } from 'react'
import styles from './AnimateText.module.css'
import ReactTypingEffect from 'react-typing-effect'

interface IAnimateText {
    values: string[]
}

function AnimateText({ values }: IAnimateText) {
    return (
        <div className={styles.AnimateText}>
            <span
                className={
                    'color-secondary ' + styles.arrow + ' ' + styles.left
                }
            >
                &lt;
            </span>
            {
                <ReactTypingEffect
                    typingDelay={1000}
                    eraseSpeed={250}
                    eraseDelay={1000}
                    className={styles.text}
                    text={values}
                />
            }
            <span
                className={
                    'color-secondary ' + styles.arrow + ' ' + styles.right
                }
            >
                &gt;
            </span>
        </div>
    )
}

export default AnimateText
