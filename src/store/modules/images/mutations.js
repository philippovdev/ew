export const mutations = {
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
  },
  setNewPage(state, page) {
    state.params.page = page;
  },
  loadNewPosts(state, images) {
    state.images = [...state.images, ...images];
  }
};
