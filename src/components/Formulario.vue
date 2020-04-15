<template>
  <v-container>
    <v-snackbar top v-model="snackbar">
      {{ text }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-card-title v-if="exito === false" class="gris">
      <span class="headline morado">Formulario para Proyecto</span>
    </v-card-title>
    <h1 class="mt-5 text-center" v-if="exito === true">
      Gracias por contestar nuestro formulario.<br /><br />
      Mientras lo revisamos puedes explorar nuestra página web:<br /><br />
      <a href="https://master.d2ukjpnazcwlxy.amplifyapp.com/">Punto Ágora</a>
    </h1>
    <v-form v-if="exito === false" ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="nombre"
            :rules="requerido"
            label="Nombre"
            filled
            color="#432C47"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            filled
            color="#432C47"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        v-model="empresa"
        :rules="requerido"
        label="Empresa"
        filled
        color="#432C47"
        required
        v-if="false"
      ></v-text-field>

      <v-textarea
        filled
        color="#432C47"
        v-model="descripcion"
        :rules="requerido"
        label="Describe brevemente tu proyecto"
        required
      ></v-textarea>

      <v-textarea
        filled
        color="#432C47"
        v-model="mision"
        :rules="requerido"
        label="¿Cuál será el uso de la pieza?"
        placeholder="Estará encendida todo el tiempo, solo se usará casualmente, etc..."
        required
      ></v-textarea>

      <v-textarea
        filled
        color="#432C47"
        v-model="vision"
        :rules="requerido"
        label="¿Qué tipo de animaciones o colores te interesan?"
        placeholder="Podemos diseñar animaciones con diferentes colores y patrones"
        required
      ></v-textarea>

      <v-textarea
        filled
        color="#432C47"
        v-model="funcionalidades"
        :rules="requerido"
        label="¿Cómo te gustaría controlar tu pieza?"
        placeholder="Dispositivo movil, pantalla en la pared, control remoto, etc..."
        required
      ></v-textarea>

      <v-text-field
        v-model="empresa"
        :rules="requerido"
        label="¿Cuál es tu presupuesto para este proyecto?"
        filled
        color="#432C47"
        required
      ></v-text-field>

      <v-radio-group v-model="radios" v-if="false">
        <template v-slot:label>
          <div>¿Cuenta con manual de usuario?</div>
        </template>
        <v-radio value="si">
          <template v-slot:label>
            <div>
              Sí
            </div>
          </template>
        </v-radio>
        <v-radio value="no">
          <template v-slot:label>
            <div>
              No
            </div>
          </template>
        </v-radio>
      </v-radio-group>

      <v-label for="urlManual" v-if="radios === 'si'"
        >Ingresa aquí(
        <a href="http://wetransfer.com" target="_blank">WeTransfer</a>) para
        cargar tus archivos y depués pega el link en el siguiente
        campo:</v-label
      >
      <v-text-field
        v-model="urlManual"
        v-if="radios === 'si'"
        :rules="requerido"
        label="Url del Manual"
        filled
        color="#432C47"
        id="urlManual"
        required
      ></v-text-field>

      <div v-if="radios === 'no'">
        <v-textarea
          filled
          color="#432C47"
          v-model="marca"
          :rules="requerido"
          label="Describe brevemente la escencia de la marca"
          required
        ></v-textarea>

        <v-textarea
          v-if="false"
          filled
          color="#432C47"
          v-model="colores"
          :rules="requerido"
          label="¿Qué colores y formas representan la marca?"
          required
        ></v-textarea>

        <v-textarea
          v-if="false"
          filled
          color="#432C47"
          v-model="expresion"
          :rules="requerido"
          label="¿Cómo se expresa la marca?"
          required
        ></v-textarea>
      </div>

      <v-textarea
        v-if="false"
        filled
        color="#432C47"
        v-model="funcionalidades"
        :rules="requerido"
        label="Funcionalidades de la plataforma"
        placeholder="Enlista TODAS las funciones que debe de realizar la plataforma web"
        required
        hint="Esto es importante para asegurarnos de incluir todas las necesidades del proyecto"
        persistent-hint
      ></v-textarea>

      <v-textarea
        v-if="false"
        filled
        color="#432C47"
        v-model="funcFuturas"
        :rules="requerido"
        label="Funcionalidades Futuras"
        placeholder="¿Qué otras funcionalidades posiblemente se agreguen al proyecto posteriormente?"
        required
        hint="Saber esta información nos permitirá preparar las bases praa próximas actualizaciones"
        persistent-hint
      ></v-textarea>

      <v-textarea
        v-if="false"
        filled
        color="#432C47"
        v-model="infoExtra"
        :rules="requerido"
        label="Información Extra"
        placeholder="¿Hay alguna otra información que consideras importante y no incluimos?"
        required
      ></v-textarea>

      <div class="d-flex justify-center">
        <v-btn
          :disabled="!valid"
          color="#432C47"
          outlined
          class="mr-4"
          @click="validate"
          :loading="clicked"
        >
          Envíar
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<script>
import { API, graphqlOperation } from 'aws-amplify'
import { createFormulario } from '../graphql/mutations'

export default {
  data: () => ({
    valid: true,
    clicked: false,
    nombre: '',
    requerido: [v => !!v || 'Campo obligatório'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'El correo debe ser válido'
    ],
    descripcion: '',
    radios: 'default',
    empresa: '',
    funcionalidades: '',
    funcFuturas: '',
    infoExtra: '',
    vision: '',
    mision: '',
    urlManual: '',
    expresion: '',
    colores: '',
    snackbar: false,
    text: "Hello, I'm a snackbar",
    marca: '',
    pregResp: [],
    exito: false
  }),
  async created() {
    let dato = await this.$store.state.isUserSignedIn()
    console.log(dato)
  },
  methods: {
    async validate() {
      this.clicked = true
      if (this.$refs.form.validate()) {
        this.pregResp = [
          { pregunta: 'Nombre', respuesta: this.nombre },
          { pregunta: 'E-mail', respuesta: this.email },
          { pregunta: 'Empresa', respuesta: this.empresa },
          {
            pregunta: 'Describe brevemente tu proyecto',
            respuesta: this.descripcion
          },
          { pregunta: 'Misión', respuesta: this.mision },
          { pregunta: 'Visión', respuesta: this.vision },
          { pregunta: 'Url del Manual', respuesta: this.urlManual },
          {
            pregunta: 'Describe brevemente la escencia de la marca',
            respuesta: this.marca
          },
          {
            pregunta: '¿Qué colores y formas representan la marca?',
            respuesta: this.colores
          },
          { pregunta: '¿Cómo se expresa la marca?', respuesta: this.expresion },
          {
            pregunta: 'Funcionalidades de la plataforma',
            respuesta: this.funcionalidades
          },
          { pregunta: 'Funcionalidades Futuras', respuesta: this.funcFuturas },
          { pregunta: 'Información Extra', respuesta: this.infoExtra }
        ]

        try {
          let datos = await API.graphql(
            graphqlOperation(createFormulario, {
              input: { pregResp: JSON.stringify(this.pregResp) }
            })
          )
          console.log(datos)
          //alert('Respuesta enviadas')
          this.snackbar = true
          this.text = 'Respuesta enviadas'
          this.$refs.form.reset()
          this.exito = true
        } catch (error) {
          console.log(error)
          if (error.code === 'Network Error') {
            //alert('Error en la red no fue posible enviar las respuestas')
            this.snackbar = true
            this.text = 'Error en la red no fue posible enviar las respuestas'
          } else {
            //alert('No fue posible enviar las respuestas')
            this.snackbar = true
            this.text = 'No fue posible enviar las respuestas'
          }
        }
      }
      this.clicked = false
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
