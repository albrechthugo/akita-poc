import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { Employee, EmployeesStore } from '..'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  readonly url = `${environment.apiBaseUrl}/employees`

  constructor(private readonly http: HttpClient, private readonly employeesStore: EmployeesStore) {}

  getAll(): Observable<Employee[]> {
    this.employeesStore.setLoading(true)
    return this.http
      .get<Employee[]>(this.url)
      .pipe(tap((employees) => this.employeesStore.update((currentState) => ({ ...currentState, employees }))))
      .pipe(tap(() => this.employeesStore.setLoading(false)))
  }
}
