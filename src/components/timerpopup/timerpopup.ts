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
  arrow_down=1;
  arrow_up=0;
  current_hrs: number;
  current_mins: number;
  current_apm: any;
  d1:Date=new Date();
  d2:Date=new Date();
  constructor(public viewctrl:ViewController,navparams:NavParams) {
    let params=navparams.get('timeObj');
    this.hrs=params.hrs;
    this.mins=params.mins;
    this.apm=params.apm;
   
    this.current_hrs=parseInt(this.hrs);
    this.current_mins=parseInt(this.mins);
    this.current_apm=this.apm;
    if(this.current_apm=="PM")
    {
      if(this.current_hrs!=12)
        this.d1.setHours(this.current_hrs+12);
      else
      this.d1.setHours(this.current_hrs);
    }
    else
    {
      if(this.current_hrs==12)
        this.d1.setHours(this.current_hrs+12)
        else
        this.d1.setHours(this.current_hrs);
    }    
    this.d1.setMinutes(this.current_mins);

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

    this.arrow_down=this.arrow_down==1?0:0
    this.hrs=parseInt(this.hrs);
    this.hrs=this.setHours(this.hrs+1);
    this.FixUpperBound();
    // if(this.hrs==12)
    // {
    //   this.apm=(this.apm=='AM')?'PM':'AM';
    // }
 
   }
   incMin()
   {
     this.mins=parseInt(this.mins);
     this.arrow_down=this.arrow_down==1?0:0 
     this.mins=this.mins+1;
     this.FixUpperBound();
     if(this.mins==60)
     {
       this.hrs=this.setHours(parseInt(this.hrs)+1);
        //  if(this.hrs==12)
        //  {
        //    this.apm=(this.apm=='AM')?'PM':'AM';
        //  }
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
     this.arrow_up=this.arrow_up==1?0:0;
     if(!this.findTimeDifference())
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
     this.arrow_up=this.arrow_up==1?0:0;
     if(!this.findTimeDifference())
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
          this.arrow_down=1;
          return true;
         }
       }
     }
   else
   {
     this.arrow_down=0;
     return false;
   }


   }
  setTimeForComparision()
  {
    
    
   if(this.apm=="PM")
   {
     if(this.hrs!=12)
       this.d2.setHours(parseInt(this.hrs)+12);
     else
     this.d2.setHours(parseInt(this.hrs));
   }
   else
   {
     if(this.hrs==12)
       this.d2.setHours(parseInt(this.hrs)+12)
       else
       this.d2.setHours(parseInt(this.hrs));
   }    
   this.d2.setMinutes(parseInt(this.mins));
   return this.d2;
  }
   findTimeDifference()
   {
    this.d2=new Date();
      this.d2=this.setTimeForComparision();
    var diff=(this.d2.getTime()-this.d1.getTime())/1000;
    diff=Math.abs(Math.round(diff/60));
    console.log(diff);
     if(diff==0)
     {
      this.arrow_down=1;
      return true;
     }
     else
     {
      this.arrow_down=0;
      return false;
     }
    

   }

   FixUpperBound()
   {
    if(this.hrs==12)
    {
      this.apm=(this.apm=='AM')?'PM':'AM';
    }
     var d3=new Date();
    var now_day=d3.getDate();
     this.d2=this.setTimeForComparision();
     var timer_day=this.d2.getDate();
      if(now_day!=timer_day)
          {
            this.arrow_up=1;
            return true;
          }
          else
          {
            this.arrow_up=0;
            return false;
          }
   }

}
