export const state = () => ({
  // Список акций
  list: null,
})

export const getters = {
  // Список акций
  getList: state => state.list || [],
}

export const mutations = {
  set(state, [namespace, value]) {
    state[namespace] = value;
  }
}

export const actions = {
  // Запросить список основных акций
  async fetchList({ commit, state }) {
    if (state.list) return;
    await this.$api.$get("/client-api/stock/promotion/get")
      .then(({body, err}) => {
        if (!err) commit("set", ["list", body]);
      })
  }
}
