import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {WorkoutsPage} from '../workouts/workouts';
import {AddWorkoutPage} from '../add-workout/add-workout';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private workoutsRoot: any;
  private addWorkoutRoot: any;
  private aboutRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.workoutsRoot = WorkoutsPage;
    this.addWorkoutRoot = AddWorkoutPage;
    this.aboutRoot = AboutPage;
  }
}
