import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regForm!: FormGroup;
  passwordMatch: boolean = false;
  data:any;


  constructor(private formBuilder: FormBuilder, private router: Router,
    private serv:ServService) {
  }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      f_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      l_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]],
      pass: ['', [Validators.required,
      Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})')]],
      repass: ['', Validators.required],
      drop: ['', Validators.required],
      gender: ['', Validators.required],
    })


  }
  get f() {
    return this.regForm.controls
  }
  checkMatch() {
    if (this.regForm.controls['pass'].value === this.regForm.controls['repass'].value) {
      this.passwordMatch = true
    } else {
      this.passwordMatch = false;
    }
  }


  onSubmit() {
    console.log(this.regForm.value);
    if(this.regForm.valid){
      this.data = {
        firstname: this.f['f_name'].value,
        lastname: this.f['l_name'].value,
        username: this.f['username'].value,
        email: this.f['email'].value,
        password: this.f['pass'].value,
        phone: this.f['phone'].value,
        gender: this.f['gender'].value,
        drop: this.f['drop'].value
      }
      this.serv.registerServ(this.data).subscribe(res=>{
        alert('SignIn Successfully!!!')
        this.router.navigateByUrl('login')
        this.regForm.reset()
      })
    }
    
  }

}
