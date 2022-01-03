import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'
import { Employee } from '../'

export interface EmployeesState {
  employees: Employee[]
}

export function createInitialState(): EmployeesState {
  return {
    employees: []
  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'employees' })
export class EmployeesStore extends Store<EmployeesState> {
  constructor() {
    super(createInitialState())
  }
}
