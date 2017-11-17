import Vue from 'vue'
import Router from 'vue-router'

import Actuator from '@/components/Actuator'

import PetList from '@/components/PetList'
import PetEdit from '@/components/PetEdit'
import PetDetail from '@/components/PetDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/zoohome'},
    {path: '/actuator', component: Actuator},

    {path: '/zoohome', redirect: {name: 'petList'}},
    {path: '/zoohome/pets', name: 'petList', component: PetList},
    {path: '/zoohome/pets/add', name: 'petAdd', component: PetEdit},
    {path: '/zoohome/pets/:id', name: 'petDetail', component: PetDetail},
    {path: '/zoohome/pets/:id/edit', name: 'petEdit', component: PetEdit}
  ]
})
