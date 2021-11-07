<template>
  <v-app :style="`font-family: ${$vuetify.rtl ? 'nrt !important' : ''}`">
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead()
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
  @font-face {
    font-family: nrt;
    src: url('~/static/assets/fonts/NRT-Reg.ttf');
  }

  

</style>
