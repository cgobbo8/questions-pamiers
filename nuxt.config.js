export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'questions-pamiers',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
        src: '~plugins/vue-slider-component.js',
        ssr: false,
        mode: 'client'
    }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: 'AIzaSyBPC6OLszuW0C1pecjvGuy6SAH9mmX2VNU',
                    authDomain: 'flo-suivi-joueur.firebaseapp.com',
                    projectId: 'flo-suivi-joueur',
                    storageBucket: 'flo-suivi-joueur.appspot.com>',
                    messagingSenderId: '253476702080',
                    appId: '1:253476702080:web:38c725a5cc4dc484872365',
                    measurementId: 'G-QHGW8ZZGF1'
                },
                services: {
                    auth: true,
                    firestore: true
                }
            }
        ]
    ],
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}