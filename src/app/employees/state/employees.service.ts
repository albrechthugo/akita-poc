import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { tap } from 'rxjs'
import { AdvancedFilters } from '.'
import { Employee, EmployeesStore } from '..'
import { environment } from '../../../environments/environment'

interface QueryFilters {
  field: string
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  readonly url = `${environment.apiBaseUrl}/employees`

  private queryParams?: HttpParams

  constructor(private readonly http: HttpClient, private readonly employeesStore: EmployeesStore) {}

  getAll(): void {
    this.employeesStore.setLoading(true)
    this.http
      .get<Employee[]>(this.url, { params: this.queryParams })
      .pipe(tap(() => this.employeesStore.setLoading(false)))
      .subscribe((employees) => this.employeesStore.update((currentState) => ({ ...currentState, employees })))
  }

  updateAdvancedFilters(advancedFilters: AdvancedFilters): void {
    this.employeesStore.update((currentState) => ({ ...currentState, advancedFilters }))

    let filters: QueryFilters[] = []

    Object.keys(advancedFilters).forEach((key) => {
      if (!advancedFilters[key as keyof AdvancedFilters]) {
        return
      }

      filters.push({ field: `${key}_like`, value: advancedFilters[key as keyof AdvancedFilters] })
    })

    this.setQueryFilter(filters)
    this.getAll()
  }

  private setQueryFilter(filters: QueryFilters[]): void {
    this.queryParams = new HttpParams()

    filters?.forEach((filter) => {
      this.queryParams = this.queryParams?.set(filter.field, filter.value)
    })
  }
}
