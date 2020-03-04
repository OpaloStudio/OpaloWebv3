<template>
  <v-card width="70vw" class="d-flex flex-column align-center">
    <span class="title ">Ver Respuestas de Formularios</span>
    <v-card-text>
      <v-expansion-panels inset>
        <v-expansion-panel class="expansion" v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header class="title "
            >Respuestas de formulario (NOMBRE DE EMPRESA
            DINAMICO)</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <div v-for="(item, i) in 5" :key="i">
              <h3>Pregunta</h3>
              <p>Respuesta</p>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>
<style lang="sass" scoped>
.expansion
    background-color: #009962 !important
    color: white !important
</style>
