import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WorkoutService} from '../../services/workout.service';
import {WorkoutsPage} from '../workouts/workouts';

@Component({
  templateUrl: 'build/pages/workout-details/workout-details.html',
  providers: [WorkoutService]
})


export class WorkoutDetailsPage {

  static get parameters() {
        return  [[NavController], [NavParams], [WorkoutService]];
    }

  constructor(private navController: NavController, private navParams: NavParams, private workoutService: WorkoutService, private workout: any, private result: any) {
    this.navController = navController;
    this.navParams = navParams;
    this.workoutService = workoutService;
    this.workout = this.navParams.get('workout');
  }

  deleteWorkout(workoutId) {
    this.workoutService.deleteWorkout(workoutId).subscribe(data => {
      this.result = data
    },
    err => console.log(err),
    () => console.log('Workout deleted'));

    this.navController.setRoot(WorkoutsPage);
  }
}