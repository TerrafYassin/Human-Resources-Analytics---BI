import { Component, OnInit } from '@angular/core';


import {EmployeesService } from '../shared/employees.service';

@Component({
  selector: 'app-employees-hr',
  templateUrl: './employees-hr.component.html',
  styleUrls: ['./employees-hr.component.css'],
  providers: [EmployeesService]
})
export class EmployeesHrComponent implements OnInit {

  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
  }

}
