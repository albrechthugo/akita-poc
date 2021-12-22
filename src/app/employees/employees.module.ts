import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'

import { EmployeesComponent, EmployeesRoutingModule } from '.'

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmployeesRoutingModule, MatTableModule]
})
export class EmployeesModule {}
