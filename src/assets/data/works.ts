export type Tag = string

export const TAGS: Tag[] = [
    'HTML/CSS',
    'React',
    'VueJs',
    'NodeJS',
    'PHP',
    'SCSS',
]

export interface ITag {
    html: string
    scss: string
    php: string
    ajax: string
    mysql: string
    jquery: string
}

const tags: ITag = {
    html: 'HTML/CSS',
    scss: 'SCSS',
    php: 'PHP',
    ajax: 'Ajax',
    mysql: 'SQL/MySQL',
    jquery: 'JQuery',
}

export interface Work {
    name: string
    url: string
    tags: ITag[]
    desc: string
}

export const Works = [
    {
        name: 'Mon agenda ludique',
        url: 'https://www.mon-agenda-ludique.fr',
        desc: `Projet sur 6 semaines, création d'un site complet d'évènementiel autour du jeux de plateau. Possibilité de créer un événements, de participer à un événement. Payant ou non. Intégration système de paiement contant ou par abonnement. Api utilisé : Stripe, OpenStreetMap. On était 2 stagiaire sur ce projet. Bilan : Site terminé dans les délais avec toutes les fonctionnalités voulu (et quelques autres). Client très satisfait. Contact : https://mon-agenda-ludique.fr/fr/contact.php`,
        tags: [
            tags.html,
            tags.scss,
            tags.php,
            tags.ajax,
            tags.mysql,
            tags.jquery,
        ],
    },
    {
        name: 'Braw Pictures',
        url: 'https://www.brawpictures.fr',
        desc: `Site web vitrine sur 1 mois, site vitrine présentants les réalisation d'une boite de production audiovisuelle. Ajout d'un système dynamique pour pouvoir ajouter de nouvelles réalisations et les afficher dans l'ordre. Bilan : Site terminé dans les délais, Client très satisfait. Contact : brawpictures@outlook.fr`,
        tags: [tags.html, tags.scss, tags.php, tags.mysql, tags.jquery],
    },
    {
        name: 'Carrefour Voyages',
        url: 'https://voyages.carrefour.fr',
        desc: `Poste que j'ai occupé pendant plus de 2 ans. Maintenance, développement de nouvelles fonctionnalités, plusieurs gros projets. Refonte du moteur de recherche passage de JQUERY -> React sur le site amiral. Développement d'un outils interne qui permet la création, et l'archivage des newsletters envoyé. CMS personnalisé pour la création de newsletter. Si vous êtes intéressé, voici un rapport plus détaillé concernant cette mission : <a href="https://abderrahmanemouzoune.fr/2019_2021_Rapport_dActivite_Professionnel_MOUZOUNE_Abderrahmane" target="_blank">ici</a>`,
        tags: [TAGS[2]],
    },
]
