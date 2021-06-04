class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.token = 'api_key=9adffccf59c02bd0dc729c1d92ccd822'
    }

    async fetchCards(url, page) {

        try {
            const response = await fetch(this.baseUrl + `${url}?${this.token}&language=ru&page=${page}`);
            return await response.json();
        } catch (e) {
            console.log('сбой сервера fetchCards');
        }
    }

    async getDetails(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}?${this.token}&language=ru`);
            return await response.json();
        } catch (e) {
            console.log('сбой сервера getDetails');
        }
    }

    async getImages(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/images?${this.token}&language=ru`);
            const data = await response.json();
            return data.posters
        } catch (e) {
            console.log('сбой сервера getImages');
        }
    }

    async getSimilar(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/similar?${this.token}&language=ru`);
            const data = await response.json();
            return data.results
        } catch (e) {
            console.log('сбой сервера getSimilar');
        }
    }

    async showTrailer(type, id) {
        // https://www.youtube.com/watch?v=key
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/videos?${this.token}&language=ru`);
            const data = await response.json();
            const url = `https://www.youtube.com/watch?v=${data.results[0].key}`
            window.open(url, '_blank')
        } catch (e) {
            try{
                const response = await fetch(this.baseUrl + `${type}/${id}/videos?${this.token}&language=en`);
                const data = await response.json();
                const url = `https://www.youtube.com/watch?v=${data.results[0].key}`
                window.open(url, '_blank')
            } catch (e) {
                alert('К сожалению, трейлер отсутсвует')
            }
        }
    }

    async getRecommendations(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/recommendations?${this.token}&language=ru`);
            const data = await response.json();
            return data.results
        } catch (e) {
            console.log('сбой сервера getRecommendations');
        }
    }

    async getCast(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/credits?${this.token}&language=ru`);
            const data = await response.json();
            return data.cast
        } catch (e) {
            console.log('сбой сервера getCast');
        }
    }

    async getFullData(type, id) {
        const data = {}
        const details = await this.getDetails(type, id)
        const images = await this.getImages(type, id)
        const similar = await this.getSimilar(type, id)
        const recommendations = await this.getRecommendations(type, id)
        const cast = await this.getCast(type, id)

        data.details = (await details)
        data.images = (await images)
        data.similar = (await similar)

        data.reccommendations = (await recommendations)
        data.cast = (await cast)

        return data
    }

}

export const mdb = new Api('https://api.themoviedb.org/3/')