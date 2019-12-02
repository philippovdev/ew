import axios from 'axios';
import store from '../store'

const CLIENT_ID = "46308a4805258b8";
const ROOT_URL = "https://api.imgur.com/3/gallery";

export default {
  fetchImages() {
    const urlParams = store.getters.params;
    const section = urlParams.section;
    const sort = urlParams.sort;
    const page = urlParams.page;
    const window = urlParams.window;
    const showViral = urlParams.showViral;

    return axios.get(`${ROOT_URL}/${section}/${sort}/${window ? window + '/' : null}${page}/${showViral ? '?showViral=' + showViral : null}`,
      {
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`
        }
      })
  },
};
