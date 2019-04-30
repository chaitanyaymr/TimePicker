import { NgModule, Injectable } from '@angular/core';
import { TimerpopupComponent } from './timerpopup';
import { IonicModule } from 'ionic-angular';

@Injectable()
@NgModule({
	declarations: [TimerpopupComponent],
	imports: [IonicModule],
	exports: [TimerpopupComponent],

})
export class TimerpopupModule {}