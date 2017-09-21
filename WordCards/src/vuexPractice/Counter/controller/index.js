import { Controller as SuperController } from '../../__share/controller/index'
import Vue from 'vue'
import App from '../component/App.vue'
import vuexStore from '../vuex/index'



export class Controller extends SuperController {
  init = () => {
    window.app = new Vue({
      el: '#app',
      
      store: vuexStore,
      
      render: h =>h(App) 
    })
  }
}



export default new Controller()

