import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkoutService} from '../../services/workout.service';

@Component({
  templateUrl: 'build/pages/add-workout/add-workout.html',
  providers: [WorkoutService]
})
export class AddWorkoutPage {
  static get parameters() {
    return [[WorkoutService]]
  }
  
  constructor(private workoutService: WorkoutService, private navController: NavController, private title: string, private note: string, private type: string) {
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
  }
}