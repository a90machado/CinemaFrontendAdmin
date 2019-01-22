
export class Cinema{

    "id":number;
    "name":string;
    "timeOpen":number;
    "timeClose":number;
    "pause":number;
    
    constructor(data?:any){
        Object.assign(this,data)
    }
}
