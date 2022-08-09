import { defineStore } from 'pinia';
import { requestSearch } from '../../service/search';

const useDetialStore = defineStore('search', {
  state() {
    return {
      searchShops: [],
    };
  },
  getters: {},
  actions: {
    async getSearchAction(keyword) {
      const res = await requestSearch(keyword);
      this.searchShops = res.data.data;
    },
  },
});

export default useDetialStore;
