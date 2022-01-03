import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { EmployeesService } from '../..'

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.scss']
})
export class AdvancedFilterComponent {
  form = new FormGroup({
    username: new FormControl(null),
    title: new FormControl(null)
  })

  constructor(private readonly employeesService: EmployeesService) {}

  applyFilters(): void {
    this.employeesService.updateAdvancedFilters(this.form.value)
  }
}
