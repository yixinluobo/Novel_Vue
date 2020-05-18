import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  novel_id: null,
  },
  // 对应于vue中的计算属性computed
  getters:{
	  getNovel_id(state){
  		  return state.novel_id;
  	  }
  },
  // 对应于vue中的methods
  mutations: {
	  go_Content(state,novel_id){
		  state.novel_id=novel_id;
	  },
  },
  actions: {
  },
  modules: {
  }
})
