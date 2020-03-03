<template>
  <v-app>
    <Barra />
    <transition-page>
      <router-view />
    </transition-page>
  </v-app>
</template>
<script>
import Barra from './components/Barra.vue'
import TransitionPage from './transitions/TransitionPage.vue'

export default {
  name: 'App',

  components: {
    Barra,
    TransitionPage
  },

  data: () => ({
    //
  })
}
</script>
<style lang="sass">
.rojo
  color: #FE5442 !important

.morado
  color: #432C47 !important
</style>
