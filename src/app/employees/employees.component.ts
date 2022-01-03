import { Component, OnInit } from '@angular/core'
import { EmployeesQuery, EmployeesService } from '.'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees$ = this.employeesQuery.employees$

  constructor(private readonly employeesService: EmployeesService, private readonly employeesQuery: EmployeesQuery) {}

  ngOnInit(): void {
    this.employeesService.getAll().subscribe()
  }
}
