import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable,FirebaseAuthState   } from 'angularfire2';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  user: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private af: AngularFire) {
    this.user = af.database.list('/Users');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  todo = {
    name: '',
    email: '',
    pass: ''
  }
  createUser(){
    this.af.auth.createUser({ email: this.todo.email, password: this.todo.pass })
    .then((authState: FirebaseAuthState) => {
    this.user.push(this.todo);
    console.log('success');
    })
    .catch((error) => {
                  console.log(error.message);
    });
  }

}
