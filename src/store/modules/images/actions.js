import api from "@/api/imgur";

export const actions = {
  async fetchImages({commit}) {
    const response = await api.fetchImages();
    commit("setImages", response.data.data);
  },
  async setActiveSection({commit}, section) {
    commit("setActiveSection", section);
    const response = await api.fetchImages();
    commit("setImages", response.data.data);
  },
  async setActiveSort({commit}, section) {
    commit("setActiveSort", section);
    const response = await api.fetchImages();
    commit("setImages", response.data.data);
  },
  async setActiveWindow({commit}, section) {
    commit("setActiveWindow", section);
    const response = await api.fetchImages();
    commit("setImages", response.data.data);
  },
  async setViral({commit}) {
    commit("setViral");
    const response = await api.fetchImages();
    commit("setImages", response.data.data);
  },
  async setNewPage({commit}, page) {
    commit('setNewPage', page + 1);
    const response = await api.fetchImages();
    commit("loadNewPosts", response.data.data);
  }
};
