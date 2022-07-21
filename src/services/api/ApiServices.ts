import Api from "./Api";

const ApiServies = {
  async upcomingMovies() {
    return Api.get('/movie/upcoming')
  },
  async popularMovies() {
    return Api.get('/movie/popular')
  },
  async topRated() {
    return Api.get('/movie/top_rated')
  },
  async nowPlaying() {
    return Api.get('/movie/now_playing')
  },
  async movieDetails(id: number) {
    return Api.get(`/movie/${id}`)
  }
}

export default ApiServies;