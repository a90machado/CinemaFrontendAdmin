import { BsTimepickerViewComponent } from 'ngx-bootstrap/datepicker/themes/bs/bs-timepicker-view.component';

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
