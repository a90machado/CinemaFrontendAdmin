import { Pipe, PipeTransform } from '@angular/core';
import { splitAtPeriod } from '@angular/compiler/src/util';

@Pipe({
  name: 'createdAtPipe'
})
export class CreatedAtPipePipe implements PipeTransform {

  transform(value: any): any {

    // dd-MM-yyyy
    const splitedDate = value.split('-');
    // 0 - dd , 1 - MM , 2 - yyyyy
    const currentDate = Date.now();
    value = Date.UTC(splitedDate[2], parseInt(splitedDate[1], 10) - 1, splitedDate[0]);

    const createdAt = Math.trunc((currentDate - value) / (1000 * 60 * 60 * 24));

    return createdAt;
  }

}
