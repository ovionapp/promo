export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Ovion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ovion &mdash; A CMS worth committing to' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/ovion.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
    ],
  },
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
};
