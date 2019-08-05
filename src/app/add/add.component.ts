import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeModel } from '../employee-model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public UserId: string;
  employee: EmployeeModel;
  employeeTable: any[];
  editForm: FormGroup;
  constructor(private activeRoute: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.UserId = params.get('id');
      console.log("userId", this.UserId);
      this.UserDetail(this.UserId);

    });



    this.api.getList().subscribe


  }

  UserDetail(UserId) {
    this.api.getById(this.UserId).subscribe(res => {
      console.log("response", res);
      this.editForm = this.formBuilder.group({
        id: [this.UserId, Validators.required],
        name: [res['name'], Validators.required],
        email: [res['email'], Validators.required],
        age: [res['age'], Validators.required],
        contact: [res['contact'], Validators.required],

      });

      // this.employeeTable  = this.editForm.value;
      // console.log("employeetable",this.employeeTable);
    });
  }


  put(event: any) {
    console.log("input data",this.editForm.value);
    this.api.putList(this.editForm.value).subscribe(res => {
      
      this.router.navigateByUrl("/details")
    },

    )
    
  }
}




