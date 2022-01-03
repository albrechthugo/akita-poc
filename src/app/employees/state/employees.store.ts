import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'
import { Employee } from '../'

export type AdvancedFilters = Pick<Employee, 'username' | 'title'>

export interface EmployeesState {
  employees: Employee[]
  advancedFilters: AdvancedFilters
}

export function createInitialState(): EmployeesState {
  return {
    employees: [],
    advancedFilters: {} as AdvancedFilters
  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'employees' })
export class EmployeesStore extends Store<EmployeesState> {
  constructor() {
    super(createInitialState())
  }
}
