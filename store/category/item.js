export const state = () => ({
  // Информация по коду категории
  vocabulary: {},
})

export const getters = {
  // Получить категорию по коду
  getCategory: state => code => state.vocabulary[code] || {},
}

export const mutations = {
  // Записать информацию в словарь
  setVocabulary(state, info) {
    state.vocabulary = {[info.code]: info, ...state.vocabulary};
  },
}

export const actions = {
  // Получить категорию
  async fetchCategory({ state, commit }, code) {
    if (state.vocabulary[code]) return;
    await this.$api.$get(`/client-api/stock/category/get/${code}`)
      .then(({err, body}) => {
        if (!err) commit("setVocabulary", body);
      })
  },

  // Транспортировка информации
  bridgeInfo({ commit }, info) {
    commit("setVocabulary", info)
  },
}
