import { Injectable } from '@angular/core';

import { Employees } from './employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  selectedEmployee : Employees;
  listEmp : Employees[];

  constructor() { }
  
}
