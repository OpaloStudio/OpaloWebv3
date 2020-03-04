import Vue from 'vue'
import Vuex from 'vuex'
import { Auth } from 'aws-amplify'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    async isUserSignedIn() {
      let response = null
      try {
        let user = await Auth.currentAuthenticatedUser()
        if (user.attributes.email === 'pruebas@opalo.studio') {
          this.user = null
          response = null
        } else {
          response = user.username
        }
      } catch (error) {
        console.log(error)
        this.user = null
        if (error === 'not authenticated') {
          await Auth.signIn('pruebas@opalo.studio', '1234567890')
          this.user = null
          response = null
        }
      }
      return response
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
