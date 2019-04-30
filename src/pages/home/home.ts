import { Component } from '@angular/core';
import { NavController, PopoverController, IonicPage } from 'ionic-angular';
import {TimerpopupComponent} from '../../components/timerpopup/timerpopup';

@IonicPage({name:'home-page'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
     time:any="";
     hrs:any="";
     mins:any="";
     apm:any="";
  constructor(public navCtrl: NavController,public popupctrl:PopoverController) {
 

      this.time=this.BindTime(new Date());
      

  }

  BindTime(value:Date)
  {
    var d=new Date(value);
    var hours = d.getHours();
    var mins = d.getMinutes()>=10?d.getMinutes():"0"+d.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let hr=hours<10?'0'+hours:hours;
  
   this.hrs=hr;
   this.mins=mins;
   this.apm=ampm;
  return hr+':'+mins+' '+ampm  ;
  }

 

  presentPopOver()
  {
    let time={'hrs':this.hrs,'mins':this.mins,'apm':this.apm}
    const popover=this.popupctrl.create(TimerpopupComponent,{'timeObj':time});
    popover.present();
    popover.onDidDismiss(d=>{
      console.log("Data from component",d);
      if(d!=null)
      {
        if(d.data!="")
        {
          this.hrs=d.data.hrs;
          this.mins=d.data.mins;
          this.apm=d.data.apm;
          this.time=this.hrs+":"+this.mins+" "+this.apm
        }
      }
       
    })
  }

  

}
