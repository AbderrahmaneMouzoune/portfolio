export type Tag = string

export const TAGS: Tag[] = ['HTML/CSS', 'React', 'VueJs', 'NodeJS']

export interface Work {
    name: string
    url: string
    img?: string
    tags: Tag[]
}

export const Works = [
    {
        name: 'Mon Agenda Ludique',
        url: 'https://mon-agenda-ludique.fr/fr/index.php',
        img: 'https://cdn.wallpapersafari.com/22/20/GXdjZi.jpg',
        tags: [TAGS[0], TAGS[3]],
    },
    {
        name: 'Work ss2',
        url: 'http://localhost:8080',
        img: 'https://cdn.wallpapersafari.com/22/20/GXdjZi.jpg',
        tags: [TAGS[0]],
    },
    {
        name: 'Work  sq q3',
        url: 'http://localhost:8080',
        img: 'https://cdn.wallpapersafari.com/22/20/GXdjZi.jpg',
        tags: [TAGS[2]],
    },
    {
        name: 'Works ss q s 4',
        url: 'http://localhost:8080',
        img: 'https://cdn.wallpapersafari.com/22/20/GXdjZi.jpg',
        tags: [TAGS[0]],
    },
]
