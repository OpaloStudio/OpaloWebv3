<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      :clipped="$vuetify.breakpoint.lgAndUp"
      color="#009962"
      width="100vw"
      dark
      class="d-flex align-end"
    >
      <v-list nav dense rounded>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="ir('/')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item>

          <v-list-item @click="ir('/portafolio')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Trabajos</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Laboratorio</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cotizar</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      :color="colorBarra"
      dark
      flat
      app
    >
      <v-toolbar-title
        ><v-img
          @click="ir('/')"
          height="80px"
          width="80px"
          contain
          src="../assets/o.png"
        ></v-img
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click="menu()">{{ icono }}</v-icon>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    colorBarra: 'transparent',
    icono: 'mdi-menu'
  }),
  methods: {
    menu() {
      this.drawer = !this.drawer
      if (this.drawer === true) {
        this.colorBarra = '#009962'
        this.icono = 'mdi-close'
      } else {
        this.colorBarra = 'transparent'
        this.icono = 'mdi-menu'
      }
    },
    ir(lugar) {
      this.$router.push(lugar)
      this.drawer = false
      this.colorBarra = 'transparent'
      this.icono = 'mdi-menu'
    }
  }
}
</script>
