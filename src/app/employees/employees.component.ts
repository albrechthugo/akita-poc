import { Component, OnInit } from '@angular/core'
import { switchMap } from 'rxjs'
import { Employee, EmployeesQuery, EmployeesService } from '.'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  isLoading$ = this.employeesQuery.isLoading$

  employees$ = this.employeesQuery.employees$

  employees: Employee[] = []

  displayedColumns: string[] = ['username', 'name', 'title', 'salary']

  constructor(private readonly employeesService: EmployeesService, private readonly employeesQuery: EmployeesQuery) {}

  ngOnInit(): void {
    this.employeesService
      .getAll()
      .pipe(switchMap(() => this.employees$))
      .subscribe((employees) => {
        this.employees = employees
      })
  }
}
