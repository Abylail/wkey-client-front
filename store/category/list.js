export const state = () => ({
  // Список категорий
  list: null,
})

export const getters = {
  // Список категорий
  getList: state => state.list || [],
}

export const mutations = {
  set(state, [namespace, value]) {
    state[namespace] = value;
  }
}

export const actions = {
  // Запросить список категорий
  async fetchList({ commit, state }) {
    if (state.list) return;
    await this.$api.$get("/client-api/stock/category/get")
      .then(({err, body}) => {
        if (!err) commit("set", ["list", body]);
      })
  }
}
