import Hearth from "@/public/img/Hearth.png"
import Profile1 from "@/public/img/profil1.jpeg"
import LayupBlackPic from "@/public/img/layupblack.webp"
import LayupGreenPic from "@/public/img/layupGreen.webp"
import LayupPinkPic from "@/public/img/layupRose.webp"
import IconApprouve from "@/public/img/approuve.png"
import IconPlus from "@/public/img/icon.png"

// PRODUCTS SECTION
export const PRODUCTS = [
    {
        title: 'Revo Black',
        icon: LayupBlackPic,
        description:
            'Layup est LA marque française de chaussures de basketball, et en dessinant et fabricant ce produit.',
    },
    {
        title: 'Revo Green',
        icon: LayupGreenPic,
        description:
            'Layup est LA marque française de chaussures de basketball, et en dessinant et fabricant ce produit.',
    },
    {
        title: 'Revo Pink',
        icon: LayupPinkPic,
        description:
            'Layup est LA marque française de chaussures de basketball, et en dessinant et fabricant ce produit.',
    }
];

export const FEATURES = [
    {
        icon: IconApprouve,
        description:
            'Ce coloris Sweet Candy représente d’une part la créativité et d’autre part l’énergie positive. Un design finement élaboré à destination des joueurs et ' +
            'des joueuses ayant une approche audacieuse de leur jeu. Ceux qui savent aussi bien se démarquer qu’inspirer leurs coéquipiers grâce à leur originalité sur les terrains de basketball.',
    },
    {
        icon: IconApprouve,
        description:
            'Ce coloris Deep Black, est profondément noir. Un produit élégant qui incarne aussi bien la puissance que l’intensité. Il est destiné aux joueurs et' +
            ' joueuses qui aiment non seulement dominer sur le terrain, mais aussi qui ne reculent jamais devant un défi. Les joueurs qui repoussent sans cesse leurs limites afin d’atteindre leurs objectifs.',
    },
    {
        icon: IconApprouve,
        description:
            'Dans la définition de notre marque de chaussures de basketball, Raise Yourself désigne toutes les personnes qui se donnent les moyens de grandir, d’avancer et d’apprendre.' +
            ' Qu’il soit collectif ou individuel, le sport est une des grandes écoles de la vie, une immense source d’apprentissage.',
    }
];

export const FAQS = [
    {
        title: "LAYUP PROPOSE-T-IL DES RÉDUCTIONS POUR LES LICENCIÉS DES FÉDÉRATIONS SPORTIVES ?",
        icon: IconPlus,
        description:
            'Oui, nous offrons une réduction pouvant aller de 5 à 15% sur l’ensemble des articles de la gamme ' +
            '« Chaussures » de notre site Layup.fr pour les licenciés actuellement inscrits au sein d’un club partenaire ' +
            'dans l’un des pays suivants : France, Belgique, Luxembourg, Suisse.',
    },
    {
        title: "EST-IL POSSIBLE DE PRÉCOMMANDER UN PRODUIT ?",
        icon: IconPlus,
        description:
            'Oui, il est tout à fait possible de précommander un article qui n’est pas encore disponible. ' +
            'Le colis sera alors expédié dès que le produit sortira. ' +
            'Vous recevrez ainsi un e-mail de confirmation d’expédition avec le numéro de suivi pour suivre la commande.',
    },
    {
        title: "OÙ PUIS-JE VOIR LES SORTIES DE PRODUITS À VENIR ?",
        icon: IconPlus,
        description:
            'Vous pouvez vous inscrire à notre newsletter afin de recevoir des informations à propos des nouvelles ' +
            'sorties de produits Layup en bas de page.',
    },
    {
        title: "PUIS-JE ANNULER OU MODIFIER MA COMMANDE LAYUP.FR ?",
        icon: IconPlus,
        description:
            'Si vous souhaitez modifier la couleur, la quantité ou la taille d’un article commandé, vous pouvez tout ' +
            'simplement annuler votre commande et en passer une nouvelle. Veuillez noter toutefois que s’il s’est écoulé ' +
            'trop de temps depuis l’envoi de votre commande sur layup.fr, le bouton d’annulation ne sera plus visible et ' +
            'vous ne pourrez pas annuler la commande. Dans ce cas, vous pourrez retourner gratuitement les articles dans les ' +
            '30 jours après réception.',
    },
    {
        title: "PUIS-JE RÉUTILISER PLUSIEURS FOIS MA RÉDUCTION ?",
        icon: IconPlus,
        description:
            'Oui, mais vous aurez besoin d’un nouveau code à chaque fois. Une fois votre statut vérifié, vous recevrez un ' +
            'code promotionnel à usage unique. Dès que vous souhaitez repasser une commande, vous pouvez faire revérifier ' +
            'votre statut et recevoir un nouveau code promotionnel.',
    },
    {
        title: "QUELS MODES DE PAIEMENT PUIS-JE UTILISER SUR LAYUP.FR ?",
        icon: IconPlus,
        description:
            'Afin de faciliter vos achats de chaussures et d’équipements sur Layup.fr, nous acceptons tous les modes de ' +
            'paiement suivants : Visa, MasterCard, American Express et PayPal',
    },
    {
        title: "QUE FAIRE SI L'ARTICLE QUE JE RECHERCHE OU MA TAILLE EST EN RUPTURE DE STOCK ?",
        icon: IconPlus,
        description:
            'Pour la plupart des produits, vous pouvez vous inscrire pour recevoir un e-mail vous ' +
            'informant lorsque votre taille est de nouveau disponible en ligne. Dès que le produit ' +
            'sera de nouveau disponible, vous recevrez un e-mail.',
    }
];

export const REVIEWS = [
    {
        icon: Hearth,
        description: '"I love this product so much ! It rocks !"',
        profile: Profile1,
        author: "Xavier Smantha",
        area: "Dijon",
        rating: 5,
    },
    {
        icon: Hearth,
        description: "Design Moderne et Élégant",
        profile: Profile1,
        author: "Claudia Smantha",
        area: "Paris",
        rating: 3,
    },
    {
        icon: Hearth,
        description: "Rapport Qualité-Prix Exceptionnel",
        profile: Profile1,
        author: "Maria Mbel",
        area: "Lyon",
        rating: 4,
    },
];