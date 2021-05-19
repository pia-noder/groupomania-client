import Vue from 'vue'
import Vuex from 'vuex'

import { mount } from '@vue/test-utils'
import CommentsList from '@/components/CommentsList.vue'
import storeData from '@/store/index.js'

Vue.use(Vuex);
//Création du store
const store = new Vuex.Store(storeData);

test('store is loaded', ()=>{
  const wrapper = mount(CommentsList,{
    store
  });
  store.state.user.push({name:'Joe'})
  expect(wrapper.vm.user).toEqual([{name: 'Joe'}])
})
