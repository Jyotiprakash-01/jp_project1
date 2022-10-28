import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  regForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private serv: ServService,) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({


      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

      pass: ['', [Validators.required,
      Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})')]],



    })

  }
  get f() {
    return this.regForm.controls
  }

  onSubmit() {
    

  
  }
  showName() {
    console.log(this.f['email'].value)
    console.log(this.f['pass'].value)
    this.serv.loginServ().subscribe((data: any) => {
      data.map((val: { email: any, password: any }) => {
        if ( val.email==this.f['email'].value && val.password==this.f['pass'].value ) {
          alert('Login Succesful!')
          this.router.navigateByUrl('/dashboard')
        }
      })
    })
  }
}
