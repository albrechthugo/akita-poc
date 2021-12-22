import { Injectable } from '@angular/core'
import { EntityStore, StoreConfig } from '@datorama/akita'
import { Employee } from '../'

export function createInitialState(): Employee[] {
  return []
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'employees' })
export class EmployeesStore extends EntityStore<Employee[]> {
  constructor() {
    super(createInitialState())
  }
}
