import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {  FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {Router} from '@angular/router'

import {EmployeeModel} from '../employee-model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employee:EmployeeModel;
  editForm: FormGroup;
  constructor(private api: ApiService, private formBuilder : FormBuilder,private router : Router) { }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      id:['', Validators.required],
      name:['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      contact : ['', Validators.required],
      
    })
  }
  put(event:any){
    this.api.putList(this.editForm.value).subscribe((res) => {
      this.router.navigateByUrl("/details");
      });
    }
  }


