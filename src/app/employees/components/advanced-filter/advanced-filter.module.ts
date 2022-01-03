import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { AdvancedFilterComponent } from './advanced-filter.component'

@NgModule({
  declarations: [AdvancedFilterComponent],
  exports: [AdvancedFilterComponent],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class AdvancedFilterModule {}
