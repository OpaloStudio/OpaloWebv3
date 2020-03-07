<template>
  <v-card width="70vw" class="d-flex flex-column align-center">
    <span class="title ">Ver Respuestas de Formularios</span>
    <v-card-text>
      <v-expansion-panels inset dark>
        <v-expansion-panel
          class="expansion"
          v-for="(formulario, i) in formularios"
          :key="i"
        >
          <v-expansion-panel-header class="title ">
            {{ formulario.empresa }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-for="(pregunta, i) in formulario.pregResp" :key="i">
              <h3>{{ pregunta.pregunta }}</h3>
              <p>{{ pregunta.respuesta }}</p>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { listFormularios } from '../graphql/queries'

export default {
  data() {
    return {
      formularios: []
    }
  },
  async created() {
    await this.obtenerFormularios()
  },
  methods: {
    async obtenerFormularios() {
      let datos = await API.graphql(graphqlOperation(listFormularios))
      let formularios = datos.data.listFormularios.items
      let nextTokenF = datos.data.listFormularios.nextToken
      while (nextTokenF !== null) {
        datos = await API.graphql(
          graphqlOperation(listFormularios, {
            input: { nextToken: nextTokenF }
          })
        )
        formularios = formularios.concat(datos.data.listFormularios.items)
        nextTokenF = datos.data.listFormularios.nextToken
      }
      for (let formulario of formularios) {
        formulario.pregResp = JSON.parse(formulario.pregResp)
        for (let pregunta of formulario.pregResp) {
          if (pregunta.pregunta === 'Empresa') {
            formulario.empresa = pregunta.respuesta
            break
          }
        }
      }
      this.formularios = formularios
    }
  }
}
</script>

<style lang="sass" scoped>
.expansion
    background-color: #009962 !important
    color: white !important
</style>
