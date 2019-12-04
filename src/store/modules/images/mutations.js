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
    for (let image in images) {
      if (state.images.indexOf(images[image]) < 0) {
        state.images.push(images[image]);
      }
    }
  }
};
