import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import FormClientes from '../views/FormClientes.vue'
import PanelControl from '../views/PanelControl.vue'
import Dashboard from '../components/Dashboard.vue'
import RespuestasForm from '../components/RespuestasForm.vue'
import CrearForms from '../components/CrearForms.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/formularioClientes',
    name: 'FormularioClientes',
    component: FormClientes
  },
  {
    path: '/panelControl',
    name: 'PanelControl',
    component: PanelControl,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'respuestasForm',
        name: 'RespuestasForm',
        component: RespuestasForm
      },
      {
        path: 'crearForm',
        name: 'CrearForms',
        component: CrearForms
      },
      {
        path: '',
        redirect: 'dashboard'
      }
    ],
    meta: {
      transitionName: `slide`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
