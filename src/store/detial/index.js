import { defineStore } from 'pinia';
import { requestDetial } from '../../service/detial/index';

const useDetialStore = defineStore('detial', {
  state() {
    return {
      shopDetial: '',
    };
  },
  getters: {},
  actions: {
    async getDetialAction(id) {
      const res = await requestDetial(id);
      this.shopDetial = res.data;
    },
  },
});

export default useDetialStore;
