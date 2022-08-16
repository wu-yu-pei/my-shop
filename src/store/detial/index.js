import { defineStore } from 'pinia';
import Message from '../../components/Message';
import { requestDetial } from '../../service/detial/index';
import useHomeStore from '../home/index';

const useDetialStore = defineStore('detial', {
  state() {
    return {
      shopDetial: '',
    };
  },
  getters: {},
  actions: {
    async getDetialAction(id, router) {
      this.shopDetial = '';
      const res = await requestDetial(id);
      if (res.data.code == 200) {
        this.shopDetial = res.data.data;
      } else if (res.data.data.code == 401) {
        const homeStore = useHomeStore();
        homeStore.userimg = '';
        homeStore.token = '';
        router.replace('/');
        new Message({ message: '登录已过期,请重新登录' });
      }
    },
  },
});

export default useDetialStore;
