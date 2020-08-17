import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  clockedTime = '50h';
  productiveTime = '30h';
  unproductiveTime = '20h';
  employeesDataSource = [
    {
      id: '0',
      name: 'Petar',
      clockedTime: '30h',
      productiveTime: '20h',
      unproductiveTime: '10h',
      productivityRation: ''
    },
    {
      id: '1',
      name: 'Ivana',
      clockedTime: '40h',
      productiveTime: '30h',
      unproductiveTime: '10h',
      productivityRation: ''
    }
  ];
  employeesData = new MatTableDataSource(this.employeesDataSource);
  displayedColumns = ['name', 'clockedTime', 'productiveTime', 'unproductiveTime', 'productivityRation', 'id'];

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employeesData.filter = filterValue.trim().toLowerCase();
  }
}
