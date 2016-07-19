import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/workout-details/workout-details.html'
})


export class WorkoutDetailsPage {

  static get parameters() {
        return  [[NavController], [NavParams]];
    }

  constructor(private navController: NavController, private navParams: NavParams, private workout: any) {
    this.navController = navController;
    this.navParams = navParams;
    this.workout = this.navParams.get('workout');
  }
}