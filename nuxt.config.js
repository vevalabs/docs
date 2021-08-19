import theme from '@nuxt/content-theme-docs'

export default theme({
  generate: {
    dir: 'public'
  },
  docs: {
    primaryColor: '#CC5233'
  },
  pwa: {
    manifest: {
      name: 'VevaLabs Docs'
    }
  }
})
