const TvShow= require ('./TvShow');
class TvShowService {
    constructor() {
      this.tvShows = [new TvShow(1,'name','genre')];
    }
    // (You didn't copy & paste this, did you?)
    getAll() {
      return this.tvShows;
    }
    getById (id)
    {
       return this.tvShows.find(tvShow=>tvShow.id == id);
    }

    createTvShow(name, genre) {
        const id = createId();
        const tvShow = new TvShow(id, name, genre);
        this.tvShows.push(tvShow);
        return tvShow;
      }
  }
  module.exports = new TvShowService();