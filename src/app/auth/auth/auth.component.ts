import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  public login(){
    //alert(" Se dio clic en el boton login ");
    if(!this.authForm.invalid){
      Object.values(this.authForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      this.router.navigateByUrl('/dashboard/student/studentCreate');
    }else{
      alert("Debe de llenar los campos");
    }
    console.log(this.authForm.value);
    //this.router.navigateByUrl('/dashboard/student/studentCreate');

  }
}
