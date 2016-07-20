import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkoutService} from '../../services/workout.service';
import {WorkoutsPage} from '../workouts/workouts'

@Component({
  templateUrl: 'build/pages/add-workout/add-workout.html',
  providers: [WorkoutService]
})
export class AddWorkoutPage {
  static get parameters() {
    return [[NavController], [WorkoutService]];
  }
  
  constructor(private navController: NavController, private workoutService: WorkoutService, private title: string, private note: string, private type: string, private result: any) {
    this.navController = navController;
    this.workoutService = workoutService;
    this.title;
    this.note;
    this.type;
  }

  onSubmit() {
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data
    },
    err => console.log(err),
    () => console.log('Workout added'));

    this.navController.setRoot(WorkoutsPage);
  }
}