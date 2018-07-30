import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {commonService} from '../services/comonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

	  email: string;
	  password: string;


	constructor(public router:Router, public cService:commonService) {

	}

	onSubmit(form: NgForm) {
		console.log(form.value);
		this.router.navigate(['dashboard']);
		this.cService.changeEmail(form.value.email);
	}

	onSignUp(){
	
		
		this.router.navigate(['signup']);

	}

}

