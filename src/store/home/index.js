import { defineStore } from 'pinia';
import local from '../../utils/index';
import { requestCategory, requestLogin, requestShops } from '../../service/home/index';

const useHomeStore = defineStore('home', {
  state() {
    return {
      account: '18338323927',
      password: '111111',
      userimg: local.get('userimg'),
      token: local.get('token'),
      category: '',
      shops: [],
      page: 1,
      id: 0,
      pid: 0,
      currentTotal: 10,
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
    },

    async shopsAction(params) {
      const res = await requestShops(params);
      this.shops = this.shops.concat(res.data);
      this.currentTotal = res.data.length;
    },
  },
  persist: {
    key: 'home',
    storage: window.localStorage,
    paths: ['token', 'userimg'],
  },
});

export default useHomeStore;
