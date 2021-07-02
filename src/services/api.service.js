class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.token = 'api_key=9adffccf59c02bd0dc729c1d92ccd822'
    }

    async fetchCards(url, page) {
        try {
            const response = await fetch(this.baseUrl + `${url}?${this.token}&language=ru&page=${page}`)
            return await response.json()
        } catch (e) {
            console.log('сбой сервера fetchCards')
        }
    }

    async fetchDetails(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}?${this.token}&language=ru`)
            return await response.json()
        } catch (e) {
            console.log('сбой сервера getDetails')
        }
    }

    async fetchImages(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/images?${this.token}&language=en`)
            const data = await response.json()
            return data.posters
        } catch (e) {
            console.log('сбой сервера getImages')
        }
    }

    async fetchSimilar(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/similar?${this.token}&language=ru`)
            const data = await response.json()
            return data.results
        } catch (e) {
            console.log('сбой сервера getSimilar')
        }
    }

    async fetchTrailer(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/videos?${this.token}&language=ru`)
            const data = await response.json()
            return data.results[0].key
        } catch (e) {
            try{
                const response = await fetch(this.baseUrl + `${type}/${id}/videos?${this.token}&language=en`)
                const data = await response.json()
                return data.results[0].key
            } catch (e) {
                alert('К сожалению, трейлер отсутсвует')
            }
        }
    }

    async fetchRecommendations(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/recommendations?${this.token}&language=ru`)
            const data = await response.json()
            return data.results
        } catch (e) {
            console.log('сбой сервера getRecommendations')
        }
    }

    async fetchCast(type, id) {
        try {
            const response = await fetch(this.baseUrl + `${type}/${id}/credits?${this.token}&language=ru`)
            return await response.json()
        } catch (e) {
            console.log('сбой сервера getCast')
        }
    }

    async getFullData(type, id) {
        const data = {}
        data.details = await this.fetchDetails(type, id)
        data.images = await this.fetchImages(type, id)
        data.similar = await this.fetchSimilar(type, id)
        data.reccommendations = await this.fetchRecommendations(type, id)
        data.cast = await this.fetchCast(type, id)

        return data
    }

    // search/movie?api_key=9adffccf59c02bd0dc729c1d92ccd822&language=ru&query=%D0%B4%D0%B6%D0%B5%D0%BD&page=1&include_adult=false
    async search(query, page = 1) {
        try {
            const response = await fetch(this.baseUrl + `search/movie?${this.token}&language=ru&query=${query}&page=${page}&include_adult=false`)
            return await response.json()
        } catch (e) {
            alert('Проверьте введенные данные')
        }
    }
}

export const mdb = new Api('https://api.themoviedb.org/3/')



