import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {EmployeeModel} from '../app/employee-model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  employees:EmployeeModel[];
  private BASE_URL : string = "http://localhost:3000/employees";
  constructor(
    private httpClient : HttpClient
  ) { }
  create(employee:EmployeeModel){ 
    return this.httpClient.post(this.BASE_URL,employee);
  }
  getList() {
    return this.httpClient.get(this.BASE_URL);
  }

  getById(id:string) {
    return this.httpClient.get(this.BASE_URL+`/${id}`);
  }

  putList(employee){
    console.log("api emp",employee);
   return this.httpClient.put(this.BASE_URL+'/'+employee.id,employee);

  }

  deleteList(id:string){
  
    return this.httpClient.delete(this.BASE_URL+`/${id}`);
  }
}
