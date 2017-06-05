export default {
    global: {
        mandatory: `<abbr>*</abbr> Mandatory fields`,
        required: `<abbr title="Mandatory field">*</abbr>`,
        errorOnSubmit: `Sorry, and error has occured, please retry in a few minutes`,
        dateDisplay: 'Do MMMM YYYY',
        contactThisCelebrity: `Contact this celebrity!`,
    },
    header: {
            submit: `Find a celebrity`,
            notfinalized: `Project not finalized yet?`,
    },
    step0: {
        title: `Terms and conditions`,
        prefill: {
            label: `You are looking for a celebrity for...`,
            placeholder: `You are looking for a celebrity for...`,
            options: {
                conference: `Keynote speech`,
                'posts-reseaux-sociaux': `Digital influence`,
                ambassadeur: `Brand ambassador`,
                'parrainage-evenement': `Event sponsorship`,
                'animation-evenement': `Event animation`,
                'spectacle-prive': `Private show`,
                'cook-show': `Cook show`,
                'presence-evenement': `Event attendance`,
                'placement-produit': `Product placement`
            }
        },
        location: {
            label: `Place`,
            placeholder: `Where`
        },
        date: {
            label: `Date`,
            placeholder: `When`,
        },
        social: {
            label: `Social networks`,
            placeholder: `Social networks`,
            options: {
                facebook: `Facebook`,
                twitter: `Twitter`,
                instagram: `Instagram`,
                snapchat: `Snapchat`,
                other: `Other`,
            }
        },
        scope: {
            label: `Geographic scope`,
            placeholder: `Geographic scope`,
            options: {
                'regional': `Regional`,
                'national': `National`,
                'european': `European`,
                'global': `Global`
            }
        },
        duration: {
            label: `Duration`,
            placeholder: `Duration`,
            options: {
                'ponctual':`Ponctual`,
                'from_1_month_to_5_month':`1 to 5 months`,
                'from_6_month_to_1_year': `6 months to 1 year`,
                'many_years': `Several years`
            }
        },
        support: {
            label: `Where`,
            placeholder: `Where`,
            options: {
                'social_network`': `Social networks`,
                'youtube': `YouTube`,
                'music_video': `Music video`,
                'film': `Movie`,
                'daily_life': `Daily life`
            }
        }
    },
    step1: {
        title: `Any questions? Specific request?`,
        titleFull: `Project details`,
        label: `Your message`,
        description: `Tell us more about your request or your project`,
        submit: `next step`,
    },
    step2: {
        title: `Your contact details`,
        lastname: {
            label: `Name`,
            placeholder: `Smith`,
        },
        firstname: {
            label: `First name`,
            placeholder: `James`,
        },
        email: {
            label: `email address`,
            placeholder: `jamessmith@mycompany.com`,
        },
        phone: {
            label: `Phone number`,
            placeholder: `0123456789`,
        },
        company: {
            label: `Name of your company`,
            placeholder: `My company`,
        },
        jobtitle: {
            label: `Your position`,
            placeholder: `Public relations manager`,
        },
        tagline: `Professional use only`,
        submit: `Send`,
    },
    confirm: {
        title: `Thank you!`,
        infos: `Your message has been sent.`,
    },
}
