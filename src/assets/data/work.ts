export type Tag = string

export const TAGS: Tag[] = ['HTML/CSS', 'React', 'VueJs', 'NodeJS']

export interface Work {
    name: string
    url: string
    tags: Tag[]
}

export const Works = [
    {
        name: 'Work 1',
        url: 'http://localhost:8080',
        tags: [TAGS[0], TAGS[3]],
    },
    {
        name: 'Work 2',
        url: 'http://localhost:8080',
        tags: [TAGS[0]],
    },
    {
        name: 'Work 3',
        url: 'http://localhost:8080',
        tags: [TAGS[0]],
    },
    {
        name: 'Work 4',
        url: 'http://localhost:8080',
        tags: [TAGS[0]],
    },
]
