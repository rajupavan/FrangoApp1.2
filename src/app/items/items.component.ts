import { Component, OnInit } from '@angular/core';
import {commonService} from '../services/comonservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {MatSnackBar} from '@angular/material';

export interface ImageList {
 	[key:string]:{name: string}
};


export interface Product { orderId: number; iName: string; 
price: number;quantity:number };

export interface CartList {
 	[order:string]:{
 		[cart:string]:Product[]
 	}
};


export interface Cart{
	userEmail:string,
	itemId:number
};

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
	aRouteName:any;
	catList:any;
	catListKeys:any;
	headImage:string = "periperi";
	baseName:any;
	ImageList:ImageList = {
		"periperi":{name:"periperi"},
		"pizzas":{name:"pizza"},
		"mealdeals":{name:"mealdealNew"},
		"burgers":{name:"burger"}
	};
	//full menu data
	fullMenuData:any;
	selectedMenu:string="pizzas";
	selctedMenuDeatails:any;



	cartList:CartList = {
		order:{
			cart:[]
		}
	};	


	cartData:Cart ;

	selectedEmail:string;

	constructor(public cService:commonService, public ARoute:ActivatedRoute, public router:Router,public snackBar: MatSnackBar) {
	}
	ngOnInit() {
    	



    	if(this.ARoute.snapshot.queryParams['rName']){
    		this.baseName = this.ARoute.snapshot.queryParams['rName'];
    		this.headImage =  this.ImageList[this.baseName].name;
    	}	
    	
    	//populate catogery data
		this.cService.getCatrgory().subscribe(
				(result)=>{ 
				 	this.catList = result;
				 	this.catListKeys = Object.keys(this.catList); 
				},
				(err) => {
					console.error(err);
				},
				() => {
					console.log('done retrieving data from service');
				});
		

		//populate category details list
		this.cService.getAllMenuDetails().subscribe(
				(result)=>{ 
					if(this.baseName) {
						this.fullMenuData = result;
						this.selctedMenuDeatails =  this.fullMenuData[this.baseName];
					}else{
						this.selctedMenuDeatails= this.fullMenuData[this.selectedMenu];
					}
				},
				(err) => {
					console.error(err);
				},
				() => {
					console.log('done retrieving data from service');
				});



			this.cService.useremail.subscribe(
				res => {
						console.log("userEmail:>>",res)
						this.selectedEmail = res;
				}
			);

	}



	//trigger on category list click
	catListClick(event,listName) {
		event.preventDefault();
		console.log(listName);
		this.selctedMenuDeatails= this.fullMenuData[listName];
	}


	goToCart(sitem) {

		this.cartList.order.cart.push({
										orderId:sitem.id,
										iName:sitem.title,
										price:sitem.price,
										quantity:1		
									})

		//this.router.navigate(['viewcart']);

		console.log("sItem",this.cartList);

		this.cService.postData(this.cartList).subscribe(

			(result)=>{
				console.log("result::>>", result);
			},
			(err) => {
					console.log("result::>>", err);
			},
			() => {
				console.log("data done::>>");
			}

		);
	}

	addToCart(Item){



			this.cartData ={
				userEmail:this.selectedEmail,
				itemId:Item.id
			};

			this.openSnackBar(Item.title,"Added To Cart");

			 this.cService.addCartData(this.cartData).subscribe(

				(result)=>{
					console.log("result::>>", result);
				},
				(err) => {
						console.log("result::>>", err);
				},
				() => {
					console.log("data done::>>");
				}

			);

	}

	openSnackBar(message: string, action: string) {


	    this.snackBar.open(message, action, {
	      duration: 2000,
	    });
  	}
	
}