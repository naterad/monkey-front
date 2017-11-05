import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard-comp',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent {

  constructor(
    private dashboardService: DashboardService
  ) {
    this.dashboardService.getCoordinates()
			.subscribe(
			obj => {
        console.log(obj);
			},
			error => {
				console.log(error);
			});
  }
}
