import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUp{

	  email: string;
	  password: string;
	  username:string;
	  phonenumber:number;
	  pincode:number;
	  address:string;


	constructor(public router:Router) {

	}

	onSubmit(form: NgForm) {
		console.log(form.value);
		this.router.navigate(['login']);
	}

	onSignUp(){
	
	}

}

