import { Movie } from './movie';
import { Cinema } from './cinema';

export class Room{

    "movie":Movie;
    "cinema":Cinema;
    "numberOfQueues":number;
    "numberOfSeatsPerQueue":number;
    
    constructor(data?:any){
        Object.assign(this,data)
    }
}