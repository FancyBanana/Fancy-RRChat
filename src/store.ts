// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     value: "String",
//   },
//   mutations: {
//     update (state, _value: string) {
//       state.value = _value;
//     },
//   },
//   actions: {

//   },
// });

const store = {
  state: {
    text: "Some string",
  },
  update: function(s:string){
    this.state.text = s;
  },
}

export default store;
