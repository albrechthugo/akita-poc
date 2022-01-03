import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'

import { EmployeesComponent, EmployeesRoutingModule } from '.'
import { AdvancedFilterModule } from './components'

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmployeesRoutingModule, MatTableModule, AdvancedFilterModule]
})
export class EmployeesModule {}
