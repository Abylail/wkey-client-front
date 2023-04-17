export const state = () => ({
  // Список подкатегорий по коду категории
  vocabulary: {},
})

export const getters = {
  // Список подкатегорий по коду категории
  getSubcategories: state => code => state.vocabulary[code] || [],
}

export const mutations = {
  setVocabulary(state, [code, list]) {
    state.vocabulary = {[code]: list, ...state.vocabulary}
  }
}

export const actions = {
  // Получить список подкатегорий
  async fetchSubcategories({ state, commit }, code) {
    if (state.vocabulary[code]) return;
    await this.$api.$get(`/client-api/stock/category/${code}/sub/get`)
      .then(({err, body}) => {
        if (!err) commit("setVocabulary", [code, body]);
      })
  }
}
