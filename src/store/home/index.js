import { defineStore } from 'pinia';
import local from '../../utils/index';
import { requestCategory, requestLogin } from '../../service/home/index';

const useHomeStore = defineStore('home', {
  state() {
    return {
      account: '18338323927',
      password: '111111',
      userimg: local.get('userimg'),
      token: local.get('token'),
      category: '',
    };
  },
  getters: {},
  actions: {
    async login() {
      const res = await requestLogin(this.account, this.password);
      console.log(res);
      // 存token
      this.token = res.data.token;
      this.userimg = res.data.img;

      return res.data;
    },

    async categoryAction() {
      const res = await requestCategory();
      this.category = res.data;
      console.log(this.category);
    },
  },
  persist: {
    key: 'home',
    storage: window.localStorage,
    paths: ['token', 'userimg'],
  },
});

export default useHomeStore;
