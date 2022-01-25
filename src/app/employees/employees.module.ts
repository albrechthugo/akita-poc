import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { EmployeesComponent, EmployeesRoutingModule } from '.'
import { AdvancedFilterModule } from './components'

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmployeesRoutingModule, MatTableModule, AdvancedFilterModule, MatProgressSpinnerModule]
})
export class EmployeesModule {}
