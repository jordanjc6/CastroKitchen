import { Injectable } from '@angular/core';
import { Dish } from './dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  dishes: Dish[] = [
    {
     name: "Fish Tacos", cuisine: "Mexican",
     price: 12.99, description: "A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand.",
     image: "https://toriavey.com/images/2012/07/Crispy-Fish-Tacos-.jpg"
    },
    {
     name: "Bulalo", cuisine: "Filipino",
     price: 14.99, description: "Bulalô is a beef dish from the Philippines. It is a light colored soup that is made by cooking beef shanks and bone marrow until the collagen and fat has melted into the clear broth.",
     image: "https://panlasangpinoy.com/wp-content/uploads/2018/07/How-to-Cook-Bulalo-Recipe.jpg"
    },
    {
     name: "Yangchow", cuisine: "Chinese",
     price: 10.99, description: "Yangzhou fried rice, Yangchow fried rice, or Yeung Chow fried rice is a popular Chinese-style wok fried rice dish in many Chinese restaurants throughout the world.",
     image: "https://philippinesfoodrecipes.files.wordpress.com/2016/02/yang-chow-fried-rice.jpg"
    }
  ];

  constructor() { }

  getDishes() {
    return this.dishes;
  }
}
