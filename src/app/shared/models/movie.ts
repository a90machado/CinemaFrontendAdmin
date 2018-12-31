export class Movie {
    "title": string;
    "minimumAge": number;
    "duration": number;
    "releaseDate": Date;
    "endDate": Date;
    constructor(data?:any){
        Object.assign(this,data)
    }
    }