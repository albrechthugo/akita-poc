import { Injectable } from '@angular/core'
import { QueryEntity } from '@datorama/akita'
import { Employee, EmployeesStore } from '..'

@Injectable({ providedIn: 'root' })
export class EmployeesQuery extends QueryEntity<Employee[]> {
  constructor(protected override store: EmployeesStore) {
    super(store)
  }
}
