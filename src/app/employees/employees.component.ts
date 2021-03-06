import { Component, OnInit } from '@angular/core'
import { Employee, EmployeesQuery, EmployeesService } from '.'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  isLoading$ = this.employeesQuery.isLoading$

  employees$ = this.employeesQuery.employees$

  advancedFilters$ = this.employeesQuery.advancedFilters$

  employees: Employee[] = []

  displayedColumns: string[] = ['username', 'name', 'title', 'salary']

  constructor(private readonly employeesService: EmployeesService, private readonly employeesQuery: EmployeesQuery) {}

  ngOnInit(): void {
    this.employees$.subscribe((employees) => (this.employees = employees))
    this.employeesService.getAll()
  }
}
