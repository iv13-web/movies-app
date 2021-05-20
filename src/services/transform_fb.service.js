export class TransformFbService {

    fbObjectToArray(fbData) {
        return Object.keys(fbData).map( key => {
            const movieObject = fbData[key];
            movieObject.firebaseId = key;
            return movieObject;
        });
    }
}

export const transformFbService = new TransformFbService();
