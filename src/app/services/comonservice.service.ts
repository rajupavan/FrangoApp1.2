import { Injectable,OnInit} from '@angular/core';
/*import {Http} from '@angular/http';
import {map} from 'rxjs/operators';*/

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// @Injectable({
// 	providedIn:'root'
// })


export interface aa { orderId: number; iName: string; price: number;quantity:number };

export interface BB {
 	[order:string]:{
 		[cart:string]:aa[]
 	}
};

const httpOptions = {
  headers: new Headers({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

export interface Cart{
	userEmail:string,
	itemId:number
};

@Injectable()

export class commonService implements OnInit {

	data:any;
	heroesUrl:any = "";


  private email = new BehaviorSubject<any>('a@agmail.com');
  useremail = this.email.asObservable();


	constructor(private  http:Http) {
	
	}

	public getCatrgory():Observable<any>{ 	
	    return   this.http.get('../assets/data/category.json')
	    .map( res => res.json() );     
	}; 


	public getFavourites():Observable<any>{
		return   this.http.get('../assets/data/favourites.json')
		.map( res => res.json() );
	};

	public getAllMenuDetails():Observable<any>{
		return   this.http.get('../assets/data/alldetail.json')
		.map( res => res.json() );
	};


	public postData(data:BB):Observable<BB>{

			return this.http.post(this.heroesUrl, data, httpOptions)
				   .map( res => res.json() );

	};


	public addCartData(addcart:Cart):Observable<Cart>{


			return this.http.post(this.heroesUrl, addcart, httpOptions)
				   .map( res => res.json() );

	};


	changeEmail(useremail) {
	    this.email.next(useremail)
	};


	ngOnInit() {

	}

}