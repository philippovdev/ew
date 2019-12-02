import axios from 'axios';
import store from '../store'

const CLIENT_ID = "46308a4805258b8";
const ROOT_URL = "https://api.imgur.com/3/gallery";

export default {
  fetchImages() {
    const params = store.getters.params;
    const section = params.activeSection;
    const sort = params.activeSort;
    const page = params.page;
    const window = params.activeWindow;
    const showViral = params.showViral;

    return axios.get(`${ROOT_URL}/${section || 'hot'}/${sort || 'viral'}/${window ? window + '/' : null}${page}/${section === 'user' ? '?showViral=' + showViral : ''}`,
      {
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`
        }
      })
  },
};
