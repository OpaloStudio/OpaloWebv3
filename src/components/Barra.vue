<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      :clipped="$vuetify.breakpoint.lgAndUp"
      color="#009962"
      width="100vw"
      dark
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
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
        ><v-img height="80px" width="80px" contain src="../assets/o.png"></v-img
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="menu()"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    colorBarra: 'transparent'
  }),
  methods: {
    menu() {
      this.drawer = !this.drawer
      if (this.drawer === true) {
        this.colorBarra = '#009962'
      } else {
        this.colorBarra = 'transparent'
      }
    }
  }
}
</script>
