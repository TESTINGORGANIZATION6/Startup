import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms-dashboard',
  templateUrl: './cms-dashboard.component.html',
  styleUrls: ['./cms-dashboard.component.scss']
})
export class CmsDashboardComponent implements OnInit {

  constructor() { }
  userData=[];
  ngOnInit() {
  }

  SetSortingOptions(){
// sort columns logic
  }

}
