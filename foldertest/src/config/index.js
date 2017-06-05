const DEV = {
    api: 'http://192.168.1.94:3000/api/internal/forms/contact',
    captchaToken: '6LcKiBUUAAAAAOACTGRuuYHPHSCfPtygMf7CaZyt',
    loaderUrl: '//localhost/~damien/website_v3/wp-content/themes/brandandcelebrities/img/loader.gif',
}

const STAGING = {
    api: 'https://api-staging.brandandcelebrities.com/api/internal/forms/contact',
    captchaToken: '6LfWxCAUAAAAAKOanYp6152NRAiuBQvawI_Ibwxg',
    loaderUrl: '//preprod.brandandcelebrities.com/wp-content/themes/brandandcelebrities/img/loader.gif'
}

const PROD = {
    api: 'https://api.brandandcelebrities.com/api/internal/forms/contact',
    captchaToken: '6Lf5tiAUAAAAADxbkSBkI9OgcSBzkFjkTHCNO4NU',
    loaderUrl: '//brandandcelebrities.com/wp-content/themes/brandandcelebrities/img/loader.gif'
}


export const env = window.location.href.indexOf('localhost') !== -1 ? "dev" : ((window.location.href.indexOf('staging') !== -1 | window.location.href.indexOf('preprod') !== -1) ? "staging" : "prod");

export const conf = env === "dev" ? DEV : (env === "staging" ? STAGING : PROD);
