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
      console.log(keyword);
      const res = await requestSearch(keyword);
      this.searchShops = res.data.data;
      console.log(res);
    },
  },
});

export default useDetialStore;
