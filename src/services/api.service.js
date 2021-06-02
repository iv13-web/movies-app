class ApiService {
     constructor(baseUrl) {
         this.baseUrl = baseUrl;
    }

    async fetchCards(url) {

        try {
            // const token = '/token/f2dbfdb0ba2dfd241d732c2412b9d571';
            const response = await fetch(this.baseUrl + url);
            return await response.json();

        } catch (e) {
            console.log('сбой сервера');
        }
    }
}

export const fbApiService = new ApiService('https://iv13-movies-app-db-default-rtdb.europe-west1.firebasedatabase.app');



class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    // https://api.themoviedb.org/3/movie/popular?api_key=9adffccf59c02bd0dc729c1d92ccd822&language=ru&page=1

    // https://api.themoviedb.org/3/search/movie?api_key=9adffccf59c02bd0dc729c1d92ccd822&language=ru&query=foras&page=1&include_adult=false

    async fetchCards(url, page) {

        try {

            const response = await fetch(this.baseUrl + `${url}?api_key=9adffccf59c02bd0dc729c1d92ccd822&language=ru&page=${page}`);
            return await response.json();
            // const data = await response.json();
            // console.log(data.results)

        } catch (e) {
            console.log('сбой сервера');
        }
    }
}

export const mdb = new Api('https://api.themoviedb.org/3/')