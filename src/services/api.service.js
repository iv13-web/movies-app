class ApiService {
     constructor(baseUrl) {
         this.baseUrl = baseUrl;
    }

    async fetchCard(url) {

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