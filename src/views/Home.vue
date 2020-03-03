<template>
  <div class="home d-flex flex-column justify-center align-center">
    <img width="50%" alt="opalo" id="logo" src="../assets/1.svg" />
    <h1 class="white--text text-center titulo mb-3">
      ¿Listos para iniciar la aventura?
    </h1>
    <p class="white--text text-center parrafo mb-5">
      Mediante este formulario, lograremos comprender mejor la esencia de tu
      proyecto y así podremos comenzar a trabajar en él.
    </p>
    <v-btn @click="dialog = true" outlined color="white"
      >Contestar Formulario</v-btn
    >
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Formulario Bicla</span>
        </v-card-title>
        <v-card-text>
          <Formulario />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Cerrar</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Envíar</v-btn
          >
        </v-card-actions>
      </v-card>
      <small>*indicates required field</small>
    </v-dialog>
  </div>
</template>

<script>
import Formulario from '../components/Formulario.vue'
export default {
  data() {
    return {
      dialogm1: '',
      dialog: false
    }
  },
  name: 'Home',
  components: {
    Formulario
  }
}
</script>
<style lang="sass" scoped>
.home
  background-color: #FE5442
  height: 100vh

@media only screen and (max-width: 600px)
  #logo
    width: 90% !important

  .titulo
    font-size: 25px !important

  .parrafo
    font-size: 16px !important
    padding: 0px 5px 0px 5px
</style>
