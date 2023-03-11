import { Injectable } from '@angular/core';
import { mealsInterface } from './mealsInterface';
// import { Dishs } from '../dishs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor() { }
  meals:mealsInterface[]=[
    {id:0,name:'Pizza',image:'../../assets/img/1.jpg',desc:'Lorem ipsum dolor sit amet.',price:100},
    {id:1,name:'Chicken',image:'../../assets/img/5.jpg',desc:'Lorem ipsum dolor sit amet.',price:80},
    {id:2,name:'Pasta',image:'../../assets/img/3.jpg',desc:'Lorem ipsum dolor sit amet.',price:110},
    {id:3,name:'Fish Food',image:'../../assets/img/4.jpg',desc:'Lorem ipsum dolor sit amet.',price:90},
    {id:4,name:'Salad',image:'../../assets/img/2.jpg',desc:'Lorem ipsum dolor sit amet.',price:95},
    {id:5,name:'Fries',image:'../../assets/img/6.jpg',desc:'Lorem ipsum dolor sit amet.',price:150}

  ]
}
