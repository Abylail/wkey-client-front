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
  fetchList() {

  }
}
