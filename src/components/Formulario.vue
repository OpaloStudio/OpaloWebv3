<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name"
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
      ></v-text-field>

      <v-textarea
        filled
        color="#432C47"
        v-model="descripcionBreve"
        :rules="requerido"
        label="Describe brevemente tu proyecto"
        required
      ></v-textarea>

      <v-textarea
        filled
        color="#432C47"
        v-model="mision"
        :rules="requerido"
        label="Misión"
        required
      ></v-textarea>

      <v-textarea
        filled
        color="#432C47"
        v-model="vision"
        :rules="requerido"
        label="Visión"
        required
      ></v-textarea>

      <v-radio-group v-model="radios">
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
          v-model="vision"
          :rules="requerido"
          label="Describe brevemente la escencia de la marca"
          required
        ></v-textarea>

        <v-textarea
          filled
          color="#432C47"
          v-model="vision"
          :rules="requerido"
          label="¿Qué colores y formas representan la marca?"
          required
        ></v-textarea>

        <v-textarea
          filled
          color="#432C47"
          v-model="vision"
          :rules="requerido"
          label="¿Cómo se expresa la marca?"
          required
        ></v-textarea>
      </div>

      <v-textarea
        filled
        color="#432C47"
        v-model="vision"
        :rules="requerido"
        label="Funcionalidades de la plataforma"
        placeholder="Enlista TODAS las funciones que debe de realizar la plataforma web"
        required
        hint="Esto es importante para asegurarnos de incluir todas las necesidades del proyecto"
        persistent-hint
      ></v-textarea>

      <v-textarea
        filled
        color="#432C47"
        v-model="vision"
        :rules="requerido"
        label="Funcionalidades Futuras"
        placeholder="¿Qué otras funcionalidades posiblemente se agreguen al proyecto posteriormente?"
        required
        hint="Saber esta información nos permitirá preparar las bases praa próximas actualizaciones"
        persistent-hint
      ></v-textarea>

      <v-textarea
        filled
        color="#432C47"
        v-model="vision"
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
        >
          Envíar
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    requerido: [v => !!v || 'Campo obligatório'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'El correo debe ser válido'
    ],
    descripcionBreve: '',
    radios: 'default',
    empresa: ''
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
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
