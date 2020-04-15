<template>
  <div class="home d-flex flex-column justify-center align-center">
    <img
      height="50%"
      class="mb-10"
      alt="opalo"
      id="logo"
      src="../assets/logopro500px.png"
    />
    <h1 class="white--text text-center titulo mt-10 mb-3">
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
        <v-card-text class="gris">
          <Formulario />
        </v-card-text>
        <v-card-actions class="gris">
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
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
  //background-color: #FE5442
  background-color: #5AC2DB
  height: 100vh

.gris
  background-color: white !important
  //background-color: #DDDDDD !important


@media only screen and (max-width: 600px)
  #logo
    width: 90% !important

  .titulo
    font-size: 25px !important

  .parrafo
    font-size: 16px !important

  .home
    padding: 0px 15px 0px 15px
</style>
