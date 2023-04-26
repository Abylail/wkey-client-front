export const state = () => ({
  // Информация подкатегории по ее коду
  vocabulary: {},
})

export const getters = {
  // Информация по коду подкатегории
  getInfo: state => subcategoryCode => state.vocabulary[subcategoryCode] || {},
}

export const mutations = {
  // Записать информацию в словарь
  setVocabulary(state, info) {
    state.vocabulary = {[info.code]: info, ...state.vocabulary};
  },
}

export const actions = {
  // Информация по подкатегории
  async fetchSubcategory({ state, commit }, {subcategory, category}) {
    if (state.vocabulary[subcategory]) return;
    await this.$api.$get(`/client-api/stock/category/${category}/sub/get/${subcategory}`)
      .then(({err, body}) => {
        if (!err) commit("setVocabulary", body);
      })
  }
}
