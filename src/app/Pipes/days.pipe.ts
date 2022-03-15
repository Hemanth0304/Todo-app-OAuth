import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
   

    let currentDay:any = new Date().getDate();
    console.log("CurrentDay",currentDay);

    let taskdate:any  = new Date(value).getDate();
    console.log("TaskDate",currentDay);

    let nowday =   currentDay - taskdate;
    return nowday;
  }

}
