export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Ovion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ovion &mdash; The CMS worth committing to' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Ovion' },
      { hid: 'og:description', property: 'og:description', content: 'Ovion &mdash; The CMS worth committing to' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.ovion.app' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Ovion' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.ovion.app/ovion.png' },
    ],
    link: [
      { hid: 'canonical', rel: 'canonical', href: 'https://www.ovion.app' },
      { rel: 'icon', type: 'image/png', href: '/ovion.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
    ],
  },
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
};
