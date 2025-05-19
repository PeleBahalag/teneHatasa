import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../components/HomeScreen.vue'
import AboutPage from '../components/AboutPage.vue'
import BasicProtocols from '../components/BasicProtocols.vue'
import AirCoordination from '../components/AirCoordination.vue'
import AdvancedFlight from '../components/AdvancedFlight.vue'
import ComLoss from '../components/ComLoss.vue'
import DefsComp from '../components/DefsComp.vue'

//מערך המפרט את כל הראוטים שלנו לפי שם וקומפוננטה מתאימה
const routes = [
  {path:'/teneHatasa', component : HomeScreen},
  {path:'/teneHatasa/about' , component : AboutPage},
  {path:'/teneHatasa/preperations' , component: BasicProtocols},
  {path : '/teneHatasa/coordination' , component : AirCoordination},
  {path:'/teneHatasa/advancedo' , component : AdvancedFlight},
  {path:'/teneHatasa/communication' , component : ComLoss},
  {path:'/teneHatasa/defenitions' , component : DefsComp}
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
