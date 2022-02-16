import styles from "./MenuLink.module.css"

interface IMenuLink {
    label: string
    link: string
    cN?: string
}

function MenuLink({ label, link, cN }: IMenuLink) {
    return (
        <a
            href={link}
            className={"text-uppercase " + styles.link + (cN ? " " + cN : "")}
        >
            {label}
        </a>
    )
}

export default MenuLink
