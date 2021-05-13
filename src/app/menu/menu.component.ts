import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';
import { Dish } from '../dish.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes!: Dish[];
  input_cuisine!: string;

  constructor(private dishesService: DishesService) { }

  ngOnInit(): void {
    this.dishesService.getDishes().subscribe(data =>{
      this.dishes = data;
    });
  }

  query() {
    const cuisine = this.input_cuisine;

    this.dishesService.query(cuisine).subscribe(data =>{
      this.dishes = data;
    });
  }

}
