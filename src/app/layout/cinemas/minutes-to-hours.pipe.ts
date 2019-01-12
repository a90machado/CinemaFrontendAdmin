import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
