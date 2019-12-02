import api from '../../api/imgur'

const state = {
  images: [],
  urlParams: {
    section: 'hot',
    sort: 'viral',
    page: 0,
    window: 'day',
    showViral: true
  }
};

const getters = {
  allCards: state => state.images,
  params: state => state.urlParams
};

const actions = {
  async fetchImages({commit}) {
    const response = await api.fetchImages();
    commit('setImages', response.data.data);
    console.log(response.data.data);
  },
}
;
const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
