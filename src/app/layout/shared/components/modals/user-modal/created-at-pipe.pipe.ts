import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdAtPipe'
})
export class CreatedAtPipePipe implements PipeTransform {

  transform(value: any): any {
    var currentDate=Date.now();
    value = new Date(value).getTime();
    var createdAt = Math.trunc((currentDate-value) / (1000*60*60*24));
    return createdAt;
  }

}
