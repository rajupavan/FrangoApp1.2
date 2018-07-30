import { Component, OnInit } from '@angular/core';
import {commonService} from '../services/comonservice.service';
import { Router } from '@angular/router';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  selectedValue: string;
  favourites:any;
  favKeys:any; 

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'BALLYMENA BT43 6UF'},
    {value: 'pizza-1', viewValue: 'LONDONDERRY BT48 7PX'},
    {value: 'tacos-2', viewValue: 'BELFAST PT7 1RR'}
  ];
  
  constructor(public cService:commonService, public router:Router) {


   }

  ngOnInit() {

    this.selectedValue = "steak-0";

        this.cService.getFavourites().subscribe(
            (result)=>{ 
               console.log(result)
                 this.favourites = result;
                 this.favKeys = Object.keys(this.favourites);
            },
            (err) => {
              console.error(err)
            },
            () => {
              console.log('done retrieving data from service');
            }
        );
  }



  favouriteClick(event, key) {
      console.log(key);

      // this.router.navigateByUrl('/items',key);
      this.router.navigate(['items'],{queryParams:{'rName':key}});
      
  }

}
