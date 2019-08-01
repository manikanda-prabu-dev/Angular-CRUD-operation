import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {ApiService} from '../api.service';
import { Router }  from '@angular/router';  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      id:['', Validators.required],
      name:['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      contact : ['', Validators.required],
      
    })
  }
 post(event:any){
  this.api.create(this.myForm.value).toPromise().then(
    res =>{
      alert('Updated Succesfully');
      this.myForm = this.formBuilder.group({
      id:"",name:"",email:"",password:"",contact:"",
      })
    },
    error =>{
      console.log("error",error)
    }
  )
  this.router.navigateByUrl("/home")
 }
}
