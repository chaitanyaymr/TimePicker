import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimerpopupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timerpopup',
  templateUrl: 'timerpopup.html'
  
})
export class TimerpopupComponent {

  hrs:any="";
  mins:any="";
  apm:any="";
  currentHr=1;
  current_hrs: number;
  current_mins: number;
  current_apm: any;
  constructor(public viewctrl:ViewController,navparams:NavParams) {
    let params=navparams.get('timeObj');
    this.hrs=params.hrs;
    this.mins=params.mins;
    this.apm=params.apm;
   
    this.current_hrs=this.hrs;
    this.current_mins=this.mins;
    this.current_apm=this.apm;

  }

  close(){
    this.viewctrl.dismiss({"data":""})
  }

  setTime()
  {
    let time={'hrs':this.hrs,'mins':this.mins,'apm':this.apm}
    this.viewctrl.dismiss({"data": time })
  }

  setHours(hours)
  {
   
   hours = hours % 12;
   hours = hours ? hours : 12; // the hour '0' should be '12'
   let hr=hours<10?'0'+hours:hours;
   return hr;
  }
 setMinutes(minutes)
 {
    let mins=minutes>=10?minutes:'0'+minutes;
    return mins;
 }
 
   incHr()
   {
    this.currentHr=this.currentHr==1?0:0
    this.hrs=parseInt(this.hrs);
    this.hrs=this.setHours(this.hrs+1);
    if(this.hrs==12)
    {
      this.apm=(this.apm=='AM')?'PM':'AM';
    }
 
   }
   incMin()
   {
     this.mins=parseInt(this.mins);
     this.currentHr=this.currentHr==1?0:0 
     this.mins=this.mins+1;
     if(this.mins==60)
     {
       this.hrs=this.setHours(parseInt(this.hrs)+1);
         if(this.hrs==12)
         {
           this.apm=(this.apm=='AM')?'PM':'AM';
         }
       this.mins='00';
     }
     else
     {
         this.mins=this.setMinutes(this.mins);
     }
   }
   decHr()
   {
     this.hrs=parseInt(this.hrs);
     if(!this.checkforCurrentSystemTime())
     {
      this.hrs=this.hrs-1;
      if(this.hrs==0)
        this.hrs=12;
      else
        this.hrs=this.setHours(this.hrs);
       if(this.hrs==11)
       {
         this.apm=(this.apm=='AM')?'PM':'AM';
       }
     }
     else
     this.hrs=this.setHours(this.hrs);
    
   }
   decMin()
   {
     this.mins=parseInt(this.mins);
     if(!this.checkforCurrentSystemTime())
     {
       this.mins=this.mins-1;
      if(this.mins==-1)
      {
        this.hrs=this.setHours(parseInt(this.hrs)-1);
        if(this.hrs==11)
        {
          this.apm=(this.apm=='AM')?'PM':'AM';
        }
        this.mins=59;
      }
      else
      this.mins=this.setMinutes(this.mins);
     }
     else{
      this.hrs=this.setHours(parseInt(this.hrs));
      this.mins=this.setMinutes(this.mins);
     }
    
   }

   checkforCurrentSystemTime()
   {
    
    if(this.current_apm==this.apm)
     {
       if(this.current_hrs==parseInt(this.hrs))
       {
         if(this.current_mins==parseInt(this.mins))
         {
          this.currentHr=1;
          return true;
         }
       }
     }
   else
   {
     this.currentHr=0;
     return false;
   }


   }
}
