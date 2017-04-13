import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Signup } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Signup(){
    this.navCtrl.push(Signup);
  }

}
