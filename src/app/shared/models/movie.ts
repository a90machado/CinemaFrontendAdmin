export class Movie {
    "id":number;
    "title": string;
    "image": String;
    "minimumAge": number;
    "duration": number;
    "releaseDate": string;
    "endDate": string;
    "director":string;
    "cast":string;
    "synopsis":string;
    constructor(data?:any){
        Object.assign(this,data)
    }
    }