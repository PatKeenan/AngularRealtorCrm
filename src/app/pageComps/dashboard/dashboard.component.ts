import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  date;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date().toLocaleDateString()
  }

}
