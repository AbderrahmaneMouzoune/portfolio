import styles from './IconLink.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface IIconLink {
    icon: IconProp
    link: string
    cN?: string
}

function IconLink({ icon, link, cN }: IIconLink) {
    return (
        <a
            target={'_blank'}
            href={link}
            className={'text-uppercase ' + styles.link + (cN ? ' ' + cN : '')}
            rel="noreferrer"
        >
            <FontAwesomeIcon fontSize={'32px'} icon={icon} />
        </a>
    )
}

export default IconLink
