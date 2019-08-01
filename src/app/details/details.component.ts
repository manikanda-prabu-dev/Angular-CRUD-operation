import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router'

import {EmployeeModel} from '../employee-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  message="";
  EmployeeTable:any[]
  constructor(
    private api: ApiService,
    private router : Router,
  
    
    ) { }

    ngOnInit() {
      this.api.getList().subscribe((res) => {
        this.api.employees = res as EmployeeModel[];
       
        this.EmployeeTable=this.api.employees;
        console.log(this.EmployeeTable);

      });
      
    }
    addMethod(){
      this.router.navigateByUrl("/add");
    }


    delMethod(id: string){
      if (confirm('Are you sure to delete this record ?') == true) {
        this.api.deleteList(id).subscribe((res) => {
        console.log("Deleted Successfully");
        return this.ngOnInit();
        });
      }
    }
  }






