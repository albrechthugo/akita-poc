import { Component } from '@angular/core'
import { EmployeesQuery, EmployeesService } from '.'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  constructor(private readonly employeesService: EmployeesService, private readonly employeesQuery: EmployeesQuery) {}
}
