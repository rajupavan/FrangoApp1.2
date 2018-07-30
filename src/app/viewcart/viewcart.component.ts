import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})

export class ViewCart{

	constructor(public router:Router) {

	}

	goToCheckout() {
		this.router.navigate(['checkout']);
	}

}

