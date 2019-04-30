import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimerPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timerFormat',
})
export class TimerPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value:Date):string {
           let result:any="";

           var d=new Date(value);
           var hours = d.getHours();
           var mins = d.getMinutes()>10?d.getMinutes():"0"+d.getMinutes();
           var ampm = hours >= 12 ? 'PM' : 'AM';
           hours = hours % 12;
           hours = hours ? hours : 12; // the hour '0' should be '12'
           let hr=hours<10?'0'+hours:hours;
          var minutes = mins < 10 ? '0'+mins : mins;
         result=hr+':'+minutes+' '+ampm  
    return result;
  }
}
