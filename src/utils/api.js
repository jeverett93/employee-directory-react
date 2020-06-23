// Setting RandomUser API with query url, API key, and export to be used in other parts of application
import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
const APIKEY = "&apikey=6WTW-8POB-DZOK-LW3Q";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};