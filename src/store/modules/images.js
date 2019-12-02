import api from '../../api/imgur'

const state = {
  images: [],
  params: {
    section: ['hot', 'top', 'user'],
    sort: ['viral', 'top', 'time', 'rising'],
    window: ['day', 'week', 'month', 'year', 'all'],
    activeSection: 'hot',
    activeSort: 'viral',
    activeWindow: 'day',
    page: 0,
    showViral: true,
  }
};

const getters = {
  allCards: state => state.images,
  params: state => state.params,
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
  setActiveSection(state, section) {
    state.params.activeSection = section;
  },
  setActiveWindow(state, window) {
    state.params.activeWindow = window;
  },
  setActiveSort(state, sort) {
    state.params.activeSort = sort;
  },
  setViral(state) {
    state.params.showViral = !state.params.showViral;
  }
};

const actions = {
  async fetchImages({commit}) {
    const response = await api.fetchImages();
    commit('setImages', response.data.data);
  },
  async  setActiveSection({commit}, section) {
    commit('setActiveSection', section);
    const response = await api.fetchImages();
    commit('setImages', response.data.data);
    console.log(response.data.data);
  },
  async  setActiveSort({commit}, section) {
    commit('setActiveSort', section);
    const response = await api.fetchImages();
    commit('setImages', response.data.data);
    console.log(response.data.data);
  },
  async  setActiveWindow({commit}, section) {
    commit('setActiveWindow', section);
    const response = await api.fetchImages();
    commit('setImages', response.data.data);
    console.log(response.data.data);
  },
  async setViral({commit}) {
    commit('setViral');
    const response = await api.fetchImages();
    commit('setImages', response.data.data);
    console.log(response.data.data);
  }

};

export default {
  state,
  getters,
  mutations,
  actions
}
