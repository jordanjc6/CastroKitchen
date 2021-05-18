import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';
import { Dish } from '../dish.model';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  dish_name!: string;
  dish_cuisine!: string;
  dish_price!: number;
  dish_description!: string;
  dish_image!: string;

  dishes!: any[];

  constructor(private dishesService: DishesService) { }

  ngOnInit(): void {
    this.refresh();
  }

  sendDish() {
    const dish: Dish = {
      name: this.dish_name,
      cuisine: this.dish_cuisine,
      price: this.dish_price,
      description: this.dish_description,
      image: this.dish_image
    }

    this.dishesService.postDish(dish);
    this.refresh();
  }

  update(dish: Dish) {
    this.dishesService.updateDish(dish).subscribe(data =>{
      console.log('data is', data);
      if(data){
        this.refresh();
      }
    });
  }

  delete(dish: Dish){
    if(window.confirm('Are you sure you want to delete this dish?')) {
      this.dishesService.deleteDish(dish).subscribe(data =>{
        if(data){
          this.refresh();
        }
      });
    }
  }

  refresh() {
    this.dishesService.getDishes().subscribe(data =>{
      this.dishes = data;
    });
  }

}
