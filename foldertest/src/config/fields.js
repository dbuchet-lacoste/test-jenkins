export const fields = [
    {
        value: 'conference',
        engine: 'speaker',
        field2: {
            value: 'location',
            type: 'text',
        },
        field3: {
            value :'date',
            type: 'date',
        }
    },
    {
        value: 'posts-reseaux-sociaux',
        engine: 'sponsored_post',
        field2: {
            value: 'social',
            type: 'select',
            options: ['facebook', 'twitter', 'instagram', 'snapchat', 'other']
        },
        field3: {
            value: 'date',
            type: 'date'
        }
    },
    {
        value: 'ambassadeur',
        engine: 'ambassador',
        field2: {
            value: 'scope',
            type: 'select',
            options: ['regional', 'national', 'european', 'global']
        },
        field3: {
            value: 'duration',
            type: 'select',
            options: ['ponctual', 'from_1_month_to_5_month', 'from_6_month_to_1_year', 'many_years']
        }
    },
    {
        value: 'parrainage-evenement',
        engine: 'event_sponsor',
        field2: {
            value: 'location',
            type: 'text'
        },
        field3: {
            value: 'date',
            type: 'date'
        }
    },
    {
        value: 'animation-evenement',
        engine: 'animator',
        field2: {
            value: 'location',
            type: 'text'
        },
        field3: {
            value: 'date',
            type: 'date'
        }
    },
    {
        value: 'spectacle-prive',
        engine: 'private_show',
        field2: {
            value: 'location',
            type: 'text'
        },
        field3: {
            value: 'date',
            type: 'date'
        }
    },
    {
        value: 'cook-show',
        engine: 'cook_show',
        field2: {
            value: 'location',
            type: 'text'
        },
        field3: {
            value: 'date',
            type: 'date'
        }
    },
    {
        value: 'presence-evenement',
        engine: 'press_event',
        field2: {
            value: 'location',
            type: 'text'
        },
        field3: {
            value: 'date',
            type: 'date'
        }
    },
    {
        value: 'placement-produit',
        engine: 'product_placement',
        field2: {
            value: 'support',
            type: 'select',
            options: ['social_network', 'youtube', 'music_video', 'film', 'daily_life']
        },
        field3: {
            value: 'date',
            type: 'date'
        }
    }
];
