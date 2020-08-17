import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
  employeesData = [
    {
      id: '0',
      name: 'Petar',
      clockedTime: '30h',
      productiveTime: '20h',
      unproductiveTime: '10h',
      productivityRation: '',
      status: true,
      description: ''
    },
    {
      id: '1',
      name: 'Ivana',
      clockedTime: '40h',
      productiveTime: '30h',
      unproductiveTime: '10h',
      productivityRation: '',
      status: false,
      description: ''
    }
  ];
  employeeId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.employeeId = paramMap.get('employeeId')
    });
  }

  changeStatus()
  {
    this.employeesData[this.employeeId].status = !this.employeesData[this.employeeId].status;
  }
}
