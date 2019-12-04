import {actions} from "./actions";
import {mutations} from "./mutations";

const state = {
  images: [],
  params: {
    section: ["hot", "top", "user"],
    sort: ["viral", "top", "time", "rising"],
    window: ["day", "week", "month", "year", "all"],
    activeSection: "hot",
    activeSort: "viral",
    activeWindow: "day",
    page: 0,
    showViral: true
  }
};

const getters = {
  allCards: state => state.images,
  params: state => state.params
};

export default {
  state,
  getters,
  mutations,
  actions
};
