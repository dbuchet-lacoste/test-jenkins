export default {
    global: {
        mandatory: `<abbr>*</abbr> Champs obligatoires`,
        required: `<abbr title="Champ obligatoire">*</abbr>`,
        errorOnSubmit: `Désolé, une erreur est survenue, veuillez réssayer dans quelques minutes`,
        dateDisplay: 'DD MMMM YYYY',
        contactThisCelebrity: `Contacter cette célébrité !`,
    },
    header: {
            submit: `Rechercher une célébrité`,
            notfinalized: `Projet pas encore finalisé ?`,
    },
    step0: {
        title: `Modalités du projet`,
        prefill: {
            label: `Vous cherchez une célébrité pour...`,
            placeholder: `Vous cherchez une célébrité pour...`,
            options: {
                conference: `Conférence`,
                'posts-reseaux-sociaux': `Posts sur les réseaux sociaux`,
                ambassadeur: `Ambassadeur de marque`,
                'parrainage-evenement': `Parrainage d'événement`,
                'animation-evenement': `Animation d'événement`,
                'spectacle-prive': `Spectacle privé`,
                'cook-show': `Cook show`,
                'presence-evenement': `Présence sur un événement`,
                'placement-produit': `Placement de produit`
            }
        },
        location: {
            label: `Lieu`,
            placeholder: `Où`
        },
        date: {
            label: `Date`,
            placeholder: `Quand`,
        },
        social: {
            label: `Réseaux sociaux`,
            placeholder: `Réseaux sociaux`,
            options: {
                facebook: `Facebook`,
                twitter: `Twitter`,
                instagram: `Instagram`,
                snapchat: `Snapchat`,
                other: `Autre`,
            }
        },
        scope: {
            label: `Portée géographique`,
            placeholder: `Portée géographique`,
            options: {
                'regional': `Régional`,
                'national': `National`,
                'european': `Européen`,
                'global': `Mondial`
            }
        },
        duration: {
            label: `Durée`,
            placeholder: `Durée`,
            options: {
                'ponctual':`Ponctuel`,
                'from_1_month_to_5_month':`1 à 5 mois`,
                'from_6_month_to_1_year': `6 mois à 1 an`,
                'many_years': `Plusieurs années`
            }
        },
        support: {
            label: `Où`,
            placeholder: `Où`,
            options: {
                'social_network': `Réseaux sociaux`,
                'youtube': `Youtube`,
                'music_video': `Clip musical`,
                'film': `Film`,
                'daily_life': `Vie quotidienne`
            }
        }
    },
    step1: {
        title: `Des questions ? Une demande spécifique ?`,
        titleFull: `Détail du projet`,
        label: `Votre message`,
        description: `Dites-nous en plus sur votre demande ou votre projet`,
        submit: `étape suivante`,
    },
    step2: {
        title: `Vos coordonnées`,
        lastname: {
            label: `Nom`,
            placeholder: `Dupont`,
        },
        firstname: {
            label: `Prénom`,
            placeholder: `Claude`,
        },
        email: {
            label: `Adresse email`,
            placeholder: `dupontclaude@masociete.com`,
        },
        phone: {
            label: `N° de téléphone`,
            placeholder: `0123456789`,
        },
        company: {
            label: `Nom de votre société`,
            placeholder: `Ma société`,
        },
        jobtitle: {
            label: `Votre fonction`,
            placeholder: `Chargé de communication`,
        },
        tagline: `Service réservé aux professionnels`,
        submit: `Envoyer`,
    },
    confirm: {
        title: `Merci !`,
        infos: `Votre message a bien été envoyé.`,
    },
}
