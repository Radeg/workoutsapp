import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WorkoutService} from '../../services/workout.service';
import {WorkoutDetailsPage} from '../workout-details/workout-details';

@Component({
  templateUrl: 'build/pages/workouts/workouts.html',
  providers: [WorkoutService]
})

export class WorkoutsPage {

    static get parameters() {
        return  [[NavController], [NavParams], [WorkoutService]];
    }

    constructor(private navController: NavController, private navParams: NavParams, private workoutService: WorkoutService, private workouts: string) {
        this.navController = navController;
        this.workoutService = workoutService;
        this.workouts;
    }

    ngOnInit() {
        this.workoutService.getWorkouts().subscribe(workouts => {
            this.workouts = workouts;
        })
    }

    workoutSelected(event, workout) {
        this.navController.push(WorkoutDetailsPage, {
            workout: workout
        });
    }
}