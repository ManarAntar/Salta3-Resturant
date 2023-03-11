import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/meals.service';
import { mealsInterface } from 'src/app/mealsInterface';

@Component({
  selector: 'app-dishs',
  templateUrl: './dishs.component.html',
  styleUrls: ['./dishs.component.css']
})
export class DishsComponent implements OnInit {
  dish:mealsInterface[]=[];
  name:string='';
  imgSrc:string='';
  price:number=1;

  constructor(private _MealsService:MealsService) { }

selected(x:any){
this.name=x.name;
this.imgSrc=x.image;
this.price=x.price;

}
  ngOnInit(): void {
    this.dish=this._MealsService.meals;
  }

}
