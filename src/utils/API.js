
import axios from "axios";

const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY   = "216096cde0e74f6dac709923e1ce5a9a";
const queryFix = "&q=";

const API = {
  // Retrieves all articles from the db
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves a new article to the db
  saveArticle: function(article) {
    return axios.post("/api/articles", { article });
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    console.log('in API delete article ')
    return axios.delete( `/api/articles/${id}`);
  },
  // Toggles an article's favorite property in the db
  favoriteArticle: function(article) {
    article.favorited = !article.favorited;
    const { _id, favorited } = article;
    return axios.patch(`/api/articles/${_id}`, { favorited });
  },
  search: function(query) {
  	console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
    return axios.get(BASEURL + APIKEY + queryFix + query);
  }
};

export default API;

// import axios from "axios";

// const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
// const APIKEY   = "216096cde0e74f6dac709923e1ce5a9a";
// const queryFix = "&q=";

// const API = {
//   // Retrieves all articles from the db
//   getArticles: function() {
//     return axios.get(process.env.REACT_APP_API_HOST + "/api/articles");
//   },
//   // Saves a new article to the db
//   saveArticle: function(article) {
//     return axios.post(process.env.REACT_APP_API_HOST + "/api/articles", { article });
//   },
//   // Deletes an article from the db
//   deleteArticle: function(id) {
//     console.log('in API delete article ')
//     return axios.delete(process.env.REACT_APP_API_HOST + `/api/articles/${id}`);
//   },
//   // Toggles an article's favorite property in the db
//   favoriteArticle: function(article) {
//     article.favorited = !article.favorited;
//     const { _id, favorited } = article;
//     return axios.patch(process.env.REACT_APP_API_HOST + `/api/articles/${_id}`, { favorited });
//   },
//   search: function(query) {
//   	console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
//     return axios.get(BASEURL + APIKEY + queryFix + query);
//   }
// };

// export default API;