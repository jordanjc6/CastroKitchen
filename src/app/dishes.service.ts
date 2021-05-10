import { Injectable } from '@angular/core';
import { Dish } from './dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  dishes: Dish[] = [
    {
     name: "Fish Tacos", cuisine: "Mexican",
     price: 12.99, description: "Write description here...",
     image: "https://toriavey.com/images/2012/07/Crispy-Fish-Tacos-.jpg"
    },
    {
     name: "Bulalo", cuisine: "Filipino",
     price: 14.99, description: "Write description here...",
     image: "https://panlasangpinoy.com/wp-content/uploads/2018/07/How-to-Cook-Bulalo-Recipe.jpg"
    },
    {
     name: "Yangchow", cuisine: "Chinese",
     price: 10.99, description: "Write description here...",
     image: "https://philippinesfoodrecipes.files.wordpress.com/2016/02/yang-chow-fried-rice.jpg"
    }
  ];

  constructor() { }

  getDishes() {
    return this.dishes;
  }
}
