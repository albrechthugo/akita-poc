import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { EmployeesStore } from '..'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  readonly url = `${environment.apiBaseUrl}/employees`

  constructor(private readonly http: HttpClient, private readonly employeesStore: EmployeesStore) {}
}
